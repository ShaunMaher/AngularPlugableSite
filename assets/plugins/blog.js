!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ng.common"),require("ng.router"),require("rxjs"),require("shared"),require("ng.core")):"function"==typeof define&&define.amd?define(["ng.common","ng.router","rxjs","shared","ng.core"],t):"object"==typeof exports?exports.blog=t(require("ng.common"),require("ng.router"),require("rxjs"),require("shared"),require("ng.core")):e.blog=t(e["ng.common"],e["ng.router"],e.rxjs,e.shared,e["ng.core"])}("undefined"!=typeof self?self:this,(function(e,t,n,o,r){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("gmml")},"0S4P":function(t,n){t.exports=e},JAnZ:function(e,n){e.exports=t},Vgaj:function(e,t){e.exports=n},cfyg:function(e,t){e.exports=o},gmml:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogModule",(function(){return l}));var o=n("0S4P"),r=n("cfyg"),i=n("JAnZ"),c=n("Vgaj"),a=n("vOrQ"),u=function(){return function(e,t){this.id=e,this.name=t,this.link=""}}(),s=function(){function e(e){this.pageTitle="Test title",this.primaryNavigationItems=[],this.secondaryNavigationItems=[],console.log("NavigationService instance created.")}return e.prototype.ngOnDestroy=function(){console.log("NavigationService instance destroyed.")},e.prototype.getPrimaryNavigationItems=function(){return console.log("NavigationService: getPrimaryNavigationItems"),console.log(this.primaryNavigationItems),Object(c.of)(this.primaryNavigationItems)},e.prototype.getSecondaryNavigationItems=function(){return console.log("NavigationService: getSecondaryNavigationItems"),console.log(this.secondaryNavigationItems),Object(c.of)(this.secondaryNavigationItems)},e.prototype.addPrimaryNavigationItem=function(e){this.primaryNavigationItems.push(e)},e.prototype.addSecondaryNavigationItem=function(e){this.secondaryNavigationItems.push(e)},e.prototype.setPageTitle=function(e){this.pageTitle=e},e.prototype.getPageTitle=function(){return Object(c.of)(this.pageTitle)},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](i.ActivatedRoute))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:function(t){return t?new t:function(e){if(window.navigationService)return console.log("NAVIGATIONSERVICE_FACTORY use existing object",window),window.navigationService;console.log("NAVIGATIONSERVICE_FACTORY create new object",window);var t=new s(e);return window.navigationService=t,window.navigationService}(a["\u0275\u0275inject"]([new a.Optional,new a.SkipSelf,e],12),a["\u0275\u0275inject"](i.ActivatedRoute))},providedIn:"root"}),e}(),f=function(){function e(e,t){this.router=t;var n=new u(7,"Blog");e.addPrimaryNavigationItem(n),console.log(e.getSecondaryNavigationItems())}return e.prototype.ngOnInit=function(){console.log("blog.component: ngOnInit",this)},e.prototype.ngOnDestroy=function(){},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s),a["\u0275\u0275directiveInject"](i.Router))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-blog"]],decls:2,vars:0,template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,"This is where blog articles will appear"),a["\u0275\u0275elementEnd"]())},styles:[""]}),e}(),l=function(){function e(){console.log("blog.module: constructor",this)}return e.entry=f,e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,r.SharedModule]]}),e}();t.default=l},vOrQ:function(e,t){e.exports=r}})}));