import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const SystemJs = (window as any).System;

export function SOMESERVICE_FACTORY_DEFINED() {
  console.log("someService Define Execute")
}

export function SOMESERVICE_FACTORY(activatedRoute: ActivatedRoute) {
  console.log("SOMESERVICE_FACTORY", (window as any));

  // (window as any).define(
  //    'someService',
  //    [],
  //    () => SOMESERVICE_FACTORY_DEFINED
  // )
  if ((window as any)['someService']) {
    console.log("SOMESERVICE_FACTORY use existing object", (window as any));
    return (window as any)['someService'];
  }
  else {
    console.log("SOMESERVICE_FACTORY create new object", (window as any));
    let someService = new SomeService(activatedRoute);
    window['someService'] = someService;
    return window['someService'];
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: SOMESERVICE_FACTORY
})
export class SomeService implements OnDestroy {
  constructor(activatedRoute: ActivatedRoute) {
    console.log("SomeService: constructor")
  }

  ngOnDestroy() {
    //Nothing here yet
  }
}
