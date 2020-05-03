import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';

import { NavigationTopbarComponent } from './navigation-topbar.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [NavigationTopbarComponent],
  entryComponents: [NavigationTopbarComponent]
})
export class NavigationTopbarModule {
  static entry = NavigationTopbarComponent;

  constructor() {
    console.log(this);
  }
}
