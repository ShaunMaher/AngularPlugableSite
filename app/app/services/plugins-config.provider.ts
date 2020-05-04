import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { preserveServerState } from './transfer-state.service';
import { isPlatformBrowser } from '@angular/common';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';

interface PluginsConfig {
  [key: string]: {
    name: string;
    path: string;
    deps: string[];
  };
}

@Injectable()
export class PluginsConfigProvider {
  config: PluginsConfig;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: {},
    @Inject(APP_BASE_HREF) @Optional() private readonly baseUrl: string,
    platformLocation: PlatformLocation
  ) {
    console.log("APP_BASE_URL", baseUrl);
    console.log("APP_BASE_HREF", APP_BASE_HREF);
    console.log("platformLocation", platformLocation);
    if (isPlatformBrowser(platformId)) {
      console.log("using platformLocation._doc.baseURI")
      //this.baseUrl = document.location.origin;
      //this.baseUrl = document.location.href;
      this.baseUrl = document.baseURI;
    }
  }

  @preserveServerState('PLUGIN_CONFIGS')
  loadConfig() {
    console.log(this.baseUrl);
    return this.http.get<PluginsConfig>(
      `${this.baseUrl}/assets/plugins-config.json`
    );
  }
}
