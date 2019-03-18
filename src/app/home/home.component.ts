import {Component, OnInit} from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

@Component({
  selector: 'app-home',
    template: `
    <my-example></my-example>
    <h3>{{ message }}</h3>
    `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private upgrade: UpgradeModule) {}

  public ngOnInit() {
    this.message = 'Hello';
      //this.upgrade.bootstrap(document.body, ['coffeeApp'], { strictDi: true });
  }
}
