import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';

import { XStartupService } from './x.startup.service';
import { YStartupService } from './y.startup.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function startupXServiceFactory(startupService: XStartupService): Function {
    return () => startupService.load();
}

export function startupYServiceFactory(startupService: YStartupService): Function {
    return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule
  ],
  providers: [
    XStartupService,
    YStartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupXServiceFactory,
      deps: [XStartupService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: startupYServiceFactory,
      deps: [YStartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
