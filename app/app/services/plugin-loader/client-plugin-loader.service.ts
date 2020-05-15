import { Injectable, Type } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';
import { PluginsConfigProvider } from '../plugins-config.provider';

const SystemJs = (window as any).System;

@Injectable()
export class ClientPluginLoaderService extends PluginLoaderService {
  constructor(private configProvider: PluginsConfigProvider) {
    super();
  }

  provideExternals() {
    Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey =>
      (window as any).define(
        externalKey,
        [],
        () => PLUGIN_EXTERNALS_MAP[externalKey]
      )
    );
  }

  // This version of the autoload function tries to load all enabled plugins in
  //  parallel but this seemed to cause issues.  See the updated version below.
  autoLoad2(appComponent): Promise<boolean> {
    const { config } = this.configProvider;

    console.log("client-plugin-loader.service:autoLoad", config);

    let loadPromises: Array<Promise<any>> = [];

    // NOTE TO SELF: Make this sequencial instead of parallel
    for (let plugin in config) {
      if (config[plugin]["autoload"]) {
        console.log("client-plugin-loader.service:autoLoad: autoloading plugin: ", config[plugin]["autoload"]);
        loadPromises.push(this.load(plugin).then((moduleType: any) => {
          const entry = moduleType.entry;
          const componentFactory = appComponent.cfr.resolveComponentFactory(entry);
          appComponent.vcRef.createComponent(componentFactory, undefined, appComponent.injector);
        }));
      }
    }
    return Promise.all(loadPromises).then(results => {console.log("eh?", results); return true;});
  }

  // Unlike the above attempt, this version of autoload loads each plugin in
  //  sequence, waiting for the previous plugin load operation to complete,
  //  before attempting to load the next plugin.
  async autoLoad(appComponent): Promise<void> {
    const { config } = this.configProvider;
    const plugins  = Object.keys(config);
    const _self = this;

    console.log("client-plugin-loader.service:autoLoad", plugins);
    for (let plugin in config) {
      if (config[plugin]["autoload"]) {
        console.log("client-plugin-loader.service:autoLoad: autoloading plugin: ", plugin);
        let pluginload: Promise<void> = this.load(plugin).then((moduleType: any) => {
          console.log("loaded: " + plugin, moduleType.entry);
          const entry = moduleType.entry;
          const componentFactory = appComponent.cfr.resolveComponentFactory(entry);
          appComponent.vcRef.createComponent(componentFactory, undefined, appComponent.injector);
        });
        await (pluginload);
      }
    }

    return Promise.resolve();
  }

  load<T>(pluginName): Promise<Type<T>> {
    const { config } = this.configProvider;
    if (!config[pluginName]) {
      throw Error(`Can't find appropriate plugin`);
    }

    const depsPromises = (config[pluginName].deps || []).map(dep => {
      //console.log("load(" + pluginName + "): ", document.baseURI, config[dep].path)
      return SystemJs.import(document.baseURI + config[dep].path).then(m => {
        window['define'](dep, [], () => m.default);
      });
    });

    return Promise.all(depsPromises).then(() => {
      //console.log("load(" + pluginName + "): ", document.baseURI, config[pluginName].path)
      return SystemJs.import(document.baseURI + config[pluginName].path).then(
        module => module.default.default
      );
    });
  }
}
