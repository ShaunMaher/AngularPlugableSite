import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Observable, of } from 'rxjs';
import { SharedModule } from 'shared';
import { Item, SharedService } from '../../shared/lib/shared.service';
import { NavigationItem, NavigationService } from '../../shared/lib/navigation.service';

// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation-topbar.component.html',
  styleUrls: ['./navigation-topbar.component.css'],
  providers: [SharedService, NavigationService]
})
export class NavigationTopbarComponent implements OnInit {
  pageTitle: Observable<string>;
  primaryNavigationItems: Observable<NavigationItem[]>;
  secondaryNavigationItems: Observable<NavigationItem[]>;

  //loading = true;
  //errors: any;

  //private queryCategories: Subscription;

  constructor(private navigationService: NavigationService) {
    let newItem = new NavigationItem(5, "test item");
    this.navigationService.addSecondaryNavigationItem(newItem);
    this.primaryNavigationItems = this.navigationService.getPrimaryNavigationItems();
    this.secondaryNavigationItems = this.navigationService.getSecondaryNavigationItems();
    this.pageTitle = this.navigationService.getPageTitle();
  }

  ngOnInit() {
    console.log(this);
    // this.queryCategories = this.apollo
    //   .watchQuery({
    //     query: CATEGORIES_QUERY
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.data = result.data;
    //     this.loading = result.loading;
    //     this.errors = result.errors;
    //   });
  }
  ngOnDestroy() {
    // this.queryCategories.unsubscribe();
  }
}
