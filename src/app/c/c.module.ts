import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-c-view',
  template: `<h3>C Component</h3>`
})
export class CComponent {
}

@NgModule({
  declarations: [CComponent],
  exports: [CComponent],
})
export class CModule {

}
