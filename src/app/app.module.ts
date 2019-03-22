import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, setAngularJSGlobal, UpgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { Directive, ElementRef, Injector, NgModule, APP_INITIALIZER } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import angular from 'angular';

import { StartupService } from './startup.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function startupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}

angular.
  module('myExampleModule', []).
  component('myExample', {template: 'myExample AngularJs directive!'}).
  directive('myApp', downgradeComponent({component: AppComponent}));

@Directive({
  selector: 'my-example'
})
export class MyExampleDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('myExample', elementRef, injector);
  }  
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyExampleDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
    ]),
    UpgradeModule,
    TransferHttpCacheModule
  ],
    entryComponents: [ AppComponent ],
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
    //bootstrap: [AppComponent]
})
export class AppModule {
  /*
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['coffeeApp'], { strictDi: true });
  }
  */
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['myExampleModule']);
  }
}
