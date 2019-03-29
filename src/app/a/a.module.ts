import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BModule} from './../b/b.module';

@Component({
  selector: 'app-a-view',
  template: `<h3>A module</h3>`
})
export class AComponent {}

@NgModule({
  declarations: [AComponent],
  exports: [AComponent],
  imports: [
    BModule,
    RouterModule.forChild([
      { path: '', component: AComponent, pathMatch: 'full'}
    ])
  ],
})
export class AModule {

}
