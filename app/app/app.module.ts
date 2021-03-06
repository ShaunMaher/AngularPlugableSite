import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";

//import { SharedComponent } from '../../shared/lib/shared.component';
import { SharedModule } from '../../shared/lib/shared.module';

import { AppComponent } from './app.component';
import { PluginLoaderService } from './services/plugin-loader/plugin-loader.service';
import { ClientPluginLoaderService } from './services/plugin-loader/client-plugin-loader.service';
import { PluginsConfigProvider } from './services/plugins-config.provider';
import { TransferStateService } from './services/transfer-state.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

const appRoutes: Routes = [
//  { path: "", component: SharedComponent },
//  { path: "article/:id", component: SharedComponent },
//  { path: "category/:id", component: SharedComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true }),
    SharedModule,
    AppRoutingModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [
    { provide: PluginLoaderService, useClass: ClientPluginLoaderService },
    PluginsConfigProvider,
    RouterModule,
    AppRoutingModule,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: PluginsConfigProvider) => () =>
        provider
          .loadConfig()
          .toPromise()
          .then(config => (provider.config = config)),
      multi: true,
      deps: [PluginsConfigProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(transferStateService: TransferStateService) {}
}
