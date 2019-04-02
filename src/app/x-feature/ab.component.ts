import {OnInit, Component} from '@angular/core';
import { XStartupService } from './../x.startup.service';

@Component({
  selector: 'app-ab-view',
    template: `
    <h3>AB Component</h3>
    <br />
    <app-a-view></app-a-view>
    <br />
    <app-b-view></app-b-view>
    `
})
export class ABComponent implements OnInit {
  constructor(private startup: XStartupService ) { }

  ngOnInit() {
    console.log("Hey I'm component AB")
    console.log(this.startup.startupData)
  }
}
