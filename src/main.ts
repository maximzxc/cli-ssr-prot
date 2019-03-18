import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './app/coffee_app/my-directive.js';

import {setAngularLib} from '@angular/upgrade/static';
import angular from 'angular';

setAngularLib(angular);


if (environment.production) {
  enableProdMode();
}

/*
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    let upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['coffeeApp']);
    platformRef.injector.get(Router).initialNavigation();
  }).catch(err => console.error(err));
});
*/
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));
