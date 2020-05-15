import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Themeing
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { SharedService } from './shared.service';
import { NavigationService } from './navigation.service';
import { SharedComponent } from './shared.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { ButtonComponent } from './button/button.component';

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule],
  //providers: [SharedService, NavigationService]
})
export class SharedModule {

  constructor (@Optional() @SkipSelf() parentModule?: SharedModule) {
    //console.log("SharedModule: constructor", this);
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //       {provide: NavigationService}
  //     ]
  //   };
  // }
}
