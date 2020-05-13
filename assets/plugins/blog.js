!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ng.common"),require("ng.router"),require("rxjs"),require("shared"),require("ng.core")):"function"==typeof define&&define.amd?define(["ng.common","ng.router","rxjs","shared","ng.core"],t):"object"==typeof exports?exports.blog=t(require("ng.common"),require("ng.router"),require("rxjs"),require("shared"),require("ng.core")):e.blog=t(e["ng.common"],e["ng.router"],e.rxjs,e.shared,e["ng.core"])}("undefined"!=typeof self?self:this,(function(e,t,n,i,o){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,(function(t){return e[t]}).bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("gmml")},"0S4P":function(t,n){t.exports=e},JAnZ:function(e,n){e.exports=t},Vgaj:function(e,t){e.exports=n},cfyg:function(e,t){e.exports=i},gmml:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogModule",(function(){return f}));var i=n("0S4P"),o=n("cfyg"),r=n("JAnZ"),s=n("vOrQ"),u=n("Vgaj"),a=function(){return function(e,t){this.id=e,this.name=t,this.link=""}}(),c=function(){function e(e){this.pageTitle="Test title",this.primaryNavigationItems=[],this.secondaryNavigationItems=[],this._PrimaryNavigationObservers=[],console.log("NavigationService instance created.")}return e.prototype.ngOnDestroy=function(){console.log("NavigationService instance destroyed.")},e.prototype.getPrimaryNavigationItems=function(){var e=this,t=this;return new u.Observable((function(n){return console.log("NavigationService: getPrimaryNavigationItems"),console.log(e.primaryNavigationItems),t._PrimaryNavigationObservers.push(n),{unsubscribe:function(){console.log("NavigaionService:PrimaryNavigationItems: unsubscribed")}}}))},e.prototype.getSecondaryNavigationItems=function(){return console.log("NavigationService: getSecondaryNavigationItems"),console.log(this.secondaryNavigationItems),Object(u.of)(this.secondaryNavigationItems)},e.prototype.addPrimaryNavigationItem=function(e){for(var t in this.primaryNavigationItems.push(e),this._PrimaryNavigationObservers)console.log("publishing new PrimaryNavigation to",this._PrimaryNavigationObservers[t]),this._PrimaryNavigationObservers[t].next(this.primaryNavigationItems)},e.prototype.addSecondaryNavigationItem=function(e){this.secondaryNavigationItems.push(e)},e.prototype.setPageTitle=function(e){this.pageTitle=e},e.prototype.getPageTitle=function(){return Object(u.of)(this.pageTitle)},e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.ActivatedRoute))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:function(t){return t?new t:function(e){if(window.navigationService)return console.log("NAVIGATIONSERVICE_FACTORY use existing object",window),window.navigationService;console.log("NAVIGATIONSERVICE_FACTORY create new object",window);var t=new c(e);return window.navigationService=t,window.navigationService}(s["\u0275\u0275inject"]([new s.Optional,new s.SkipSelf,e],12),s["\u0275\u0275inject"](r.ActivatedRoute))},providedIn:"root"}),e}(),l=function(){function e(){this.testValue="test:content",this._publishedContentObservers=[],console.log("content:constructor"),this.publishContent("")}return e.prototype.ngOnInit=function(){console.log("content.component: ngOnInit",this)},e.prototype.ngOnDestroy=function(){},e.prototype.subscribe=function(){var e=this;return new u.Observable((function(t){return e._publishedContentObservers.push(t),{unsubscribe:function(){}}}))},e.prototype.publishContent=function(e){var t={source:e,contentType:p.Markdown,content:"\n    ## Dummy heading 1\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum\n    mauris et magna sollicitudin, a egestas felis accumsan. Nunc enim est,\n    laoreet quis elit et, vehicula dignissim nunc. Suspendisse imperdiet, mauris\n    eget scelerisque finibus, neque velit luctus diam, eleifend rhoncus arcu\n    elit sed nibh. Sed id ullamcorper ex, sit amet efficitur nulla. Nullam\n    feugiat pretium ipsum vitae ornare. Sed congue auctor justo ac lobortis. Ut\n    eget bibendum tortor, non dapibus erat. Aliquam eleifend urna sem, ut\n    efficitur libero tristique eu. Proin malesuada ex in magna mattis, non\n    sollicitudin erat porta. Fusce molestie sagittis justo aliquet rutrum.\n\n    Aliquam convallis lectus id leo ullamcorper molestie. In tempor tempus\n    tincidunt. Ut at gravida magna. Sed facilisis pretium enim in rutrum.\n    Aliquam sit amet ex ipsum. Aliquam placerat interdum orci vitae aliquam.\n    Fusce feugiat mi vel ex dignissim imperdiet. Phasellus libero massa,\n    vehicula in est sed, lobortis tempor mi. Aliquam at mattis enim. Mauris\n    rhoncus risus quam, sed scelerisque tortor dignissim vel.\n    "};for(var n in this.publishedContent=t,this._publishedContentObservers)console.log("publishing new Content to",this._publishedContentObservers[n]),this._publishedContentObservers[n].next(this.publishedContent)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-content"]],decls:5,vars:3,template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1,"Content Module!"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](2,"br"),s["\u0275\u0275text"](3),s["\u0275\u0275pipe"](4,"async")),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("\n",s["\u0275\u0275pipeBind1"](4,1,t.publishedContent.content),"\n"))},pipes:[i.AsyncPipe],styles:[""]}),e}(),p=function(e){return e[e.Unknown=0]="Unknown",e[e.Markdown=1]="Markdown",e[e.Wikitext=2]="Wikitext",e[e.PlainText=3]="PlainText",e[e.Html=4]="Html",e}({}),m=function(){function e(e,t){var n=this;this.router=t,this.testValue="test",this.navigationService=e,console.log("blog:constructor");var i=new a(7,"Blog");e.addPrimaryNavigationItem(i),this.publishedContent={contentType:p.PlainText},this.contentComponent=new l,this.contentComponent.subscribe().subscribe((function(e){console.log("Subscription updated"),n.publishedContent=e}))}return e.prototype.ngOnInit=function(){this.contentComponent.publishContent("")},e.prototype.ngOnDestroy=function(){},e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c),s["\u0275\u0275directiveInject"](r.Router))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-blog"]],decls:3,vars:1,template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1,"This is where blog articles will appear"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](2)),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("\n",t.publishedContent.content,"\n"))},styles:[""]}),e}(),d=function(){function e(){console.log("content.module: constructor",this)}return e.entry=l,e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.SharedModule]]}),e}(),f=function(){function e(){console.log("blog.module: constructor",this)}return e.entry=m,e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.SharedModule,d]]}),e}();t.default=f},vOrQ:function(e,t){e.exports=o}})}));