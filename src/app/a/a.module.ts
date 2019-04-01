import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-a-view',
    template: `<h3>A Component</h3>`
})
export class AComponent {}

@NgModule({
  declarations: [AComponent],
  exports: [AComponent],
})
export class AModule {

}
