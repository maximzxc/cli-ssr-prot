import {OnInit, NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {YStartupService} from './../y.startup.service';

@Component({
  selector: 'app-b-view',
  template: `<h3>B module</h3>`
})
export class BComponent implements OnInit {
  constructor(private startup: YStartupService ) { }

  ngOnInit() {
    console.log("Hey I'm component b")
    console.log(this.startup.startupData)
  }
}

@NgModule({
  declarations: [BComponent],
  exports: [BComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: BComponent, pathMatch: 'full'}
    ])
  ]
})
export class BModule {

}
