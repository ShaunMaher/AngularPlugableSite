import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay }      from 'rxjs/operators';

export class SearchTarget {
  constructor(public id: number, public name: string) { }
}

export class NavigationItem {
  link:string = '';
  constructor(public id: number, public name: string) { }
}

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves items from a server */
@Injectable()
export class NavigationService implements OnDestroy {
  private pageTitle: string = 'Test title';
  private primaryNavigationItems: NavigationItem[] = [];
  private secondaryNavigationItems: NavigationItem[] = [];

  constructor(private activatedRoute: ActivatedRoute) { console.log('NavigationService instance created.'); }
  ngOnDestroy() { console.log('NavigationService instance destroyed.'); }

  getPrimaryNavigationItems(): Observable<NavigationItem[]>  {
    console.log("NavigationService: getPrimaryNavigationItems");
    console.log(this.activatedRoute);
    return of(this.primaryNavigationItems);
  }

  getSecondaryNavigationItems(): Observable<NavigationItem[]>  {
    console.log("NavigationService: getSecondaryNavigationItems");
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
