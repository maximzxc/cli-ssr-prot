import {Component, OnInit} from '@angular/core';
import {YStartupService} from './../y.startup.service';

@Component({
  selector: 'app-abc-view',
    template: `
    <h3>ABC Component</h3>
    <br />
    <app-a-view></app-a-view>
    <br />
    <app-b-view></app-b-view>
    <br />
    <app-c-view></app-c-view>
    `
})
export class ABCComponent implements OnInit {
  constructor(private startup: YStartupService ) { }

  ngOnInit() {
    console.log("Hey I'm component ABC")
    console.log(this.startup.startupData)
  }
}
