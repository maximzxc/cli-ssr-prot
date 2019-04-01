import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-b-view',
  template: `<h3>B Component</h3>`
})
export class BComponent {
}

@NgModule({
  declarations: [BComponent],
  exports: [BComponent],
})
export class BModule {

}
