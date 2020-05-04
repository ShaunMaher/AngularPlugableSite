import { Component } from '@angular/core';
import { NavigationItem, NavigationService } from './navigation.service';

@Component({
  selector: 'shared-component',
  template: `
    <br/><br/><h4>
      Shared component
    </h4>
  `,
  styles: [],
  //providers: [NavigationService]
})
export class SharedComponent {
  constructor(private navigationService: NavigationService) {

  }
}
