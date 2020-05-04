import { Injectable, OnDestroy, Optional, SkipSelf, ApplicationRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay }      from 'rxjs/operators';

const NAVIGATIONSERVICE_FACTORY_WINDOW_OBJECT_NAME = 'navigationService';

export class SearchTarget {
  constructor(public id: number, public name: string) { }
}

export class NavigationItem {
  link:string = '';
  constructor(public id: number, public name: string) { }
}

// I *think* that this goes against the intended Angular pattern but it's
//  non-trivial to create a singleton serivce in a plugin because the usual
//  methods done seem to filter down into the plugins.  It *seems* like the
//  dependency injection code inside a plugin doesn't look outside the plugin
//  (e.g. to the AppModule) when resolving a dependency provided outside the
//  current plugin so it always creates a new instance.
export function NAVIGATIONSERVICE_FACTORY(activatedRoute: ActivatedRoute) {
  if ((window as any)[NAVIGATIONSERVICE_FACTORY_WINDOW_OBJECT_NAME]) {
    console.log("NAVIGATIONSERVICE_FACTORY use existing object", (window as any));
    return (window as any)[NAVIGATIONSERVICE_FACTORY_WINDOW_OBJECT_NAME];
  }
  else {
    console.log("NAVIGATIONSERVICE_FACTORY create new object", (window as any));
    let someService = new NavigationService(activatedRoute);
    window[NAVIGATIONSERVICE_FACTORY_WINDOW_OBJECT_NAME] = someService;
    return window[NAVIGATIONSERVICE_FACTORY_WINDOW_OBJECT_NAME];
  }
}

const FETCH_LATENCY = 500;

// The following "Injectable" ensures that the service remains a singleton
// Do NOT remove the next line that looks like a comment: "// @dynamic".  https://github.com/ng-packagr/ng-packagr/issues/696
// @dynamic
@Injectable({
  deps: [
    [new Optional(), new SkipSelf(), NavigationService],
    ActivatedRoute,
  ],
  providedIn: 'root',
  useFactory: NAVIGATIONSERVICE_FACTORY,
})
export class NavigationService implements OnDestroy {
  private pageTitle: string = 'Test title';
  private primaryNavigationItems: NavigationItem[] = [];
  private secondaryNavigationItems: NavigationItem[] = [];

  constructor(activatedRoute: ActivatedRoute) { console.log('NavigationService instance created.'); }
  ngOnDestroy() { console.log('NavigationService instance destroyed.'); }

  getPrimaryNavigationItems(): Observable<NavigationItem[]>  {
    console.log("NavigationService: getPrimaryNavigationItems");
    console.log(this.primaryNavigationItems);
    return of(this.primaryNavigationItems);
  }

  getSecondaryNavigationItems(): Observable<NavigationItem[]>  {
    console.log("NavigationService: getSecondaryNavigationItems");
    console.log(this.secondaryNavigationItems);
    return of(this.secondaryNavigationItems);
  }

  addPrimaryNavigationItem(item: NavigationItem)  {
    this.primaryNavigationItems.push(item);
  }

  addSecondaryNavigationItem(item: NavigationItem)  {
    this.secondaryNavigationItems.push(item);
  }

  setPageTitle(title: string) {
    this.pageTitle = title;
  }

  getPageTitle(): Observable<string> {
    return of(this.pageTitle);
  }

  // getItem(id: number | string): Observable<Item> {
  //   const item$ = of(ITEMS.find(item => item.id === +id));
  //   return item$.pipe(delay(FETCH_LATENCY));
  // }
}
