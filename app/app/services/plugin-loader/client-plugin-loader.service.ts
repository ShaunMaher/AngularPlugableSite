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

  load<T>(pluginName): Promise<Type<T>> {
    const { config } = this.configProvider;
    if (!config[pluginName]) {
      throw Error(`Can't find appropriate plugin`);
    }

    const depsPromises = (config[pluginName].deps || []).map(dep => {
      console.log("load(" + pluginName + "): ", document.baseURI, config[dep].path)
      return SystemJs.import(document.baseURI + config[dep].path).then(m => {
        window['define'](dep, [], () => m.default);
      });
    });

    return Promise.all(depsPromises).then(() => {
      console.log("load(" + pluginName + "): ", document.baseURI, config[pluginName].path)
      return SystemJs.import(document.baseURI + config[pluginName].path).then(
        module => module.default.default
      );
    });
  }
}
