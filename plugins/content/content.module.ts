import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ContentComponent],
  entryComponents: [ContentComponent]
})
export class ContentModule {
  static entry = ContentComponent;

  constructor() {
    console.log("content.module: constructor", this);
  }
}
