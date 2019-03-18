import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'my-directive'
})
export class MyDirective extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('hello', elementRef, injector);
  }
}
