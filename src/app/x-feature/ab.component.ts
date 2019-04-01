import {Component} from '@angular/core';

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
export class ABComponent {}
