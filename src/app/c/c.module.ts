import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BModule} from './../b/b.module';
import {YStartupService} from './../y.startup.service';

@Component({
  selector: 'app-c-view',
  template: `<h3>C module</h3><app-b-view></app-b-view>`
})
export class CComponent {
}

@NgModule({
  declarations: [CComponent],
  exports: [CComponent],
  imports: [
    BModule,
    RouterModule.forChild([
      { path: '', component: CComponent, pathMatch: 'full'}
    ])
  ],
})
export class CModule {

}
