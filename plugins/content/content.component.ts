import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { Subscription } from "rxjs";
import { Observable, of } from 'rxjs';
//import { SharedModule } from 'shared';
//import { Item, SharedService } from '../../shared/lib/shared.service';
import { NavigationItem, NavigationService } from '../../shared/lib/navigation.service';
import { SomeService } from '../../app/app/services/some.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  //providers: [NavigationService]
})
export class ContentComponent implements OnInit {
  publishedContent:Observable<string>;
  //navigationService:NavigationService;
  //pageTitle: Observable<string>;
  //primaryNavigationItems: Observable<NavigationItem[]>;
  //secondaryNavigationItems: Observable<NavigationItem[]>;

  //loading = true;
  //errors: any;

  //private queryCategories: Subscription;

  constructor(navigationService: NavigationService, someService: SomeService, private router: Router) {
    let newItem = new NavigationItem(7, "Blog");
    navigationService.addPrimaryNavigationItem(newItem);
    console.log(navigationService.getSecondaryNavigationItems());

    //this.navigationService = navigationService;
    //this.secondaryNavigationItems = this.navigationService.getSecondaryNavigationItems();
    //this.pageTitle = this.navigationService.getPageTitle();
  }

  ngOnInit() {
    console.log("content.component: ngOnInit", this);

    //let newItem = new NavigationItem(7, "Blog");
    //this.navigationService.addSecondaryNavigationItem(newItem);
    //console.log(this.navigationService.getPrimaryNavigationItems());

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
