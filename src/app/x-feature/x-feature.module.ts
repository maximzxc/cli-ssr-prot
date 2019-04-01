import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XFeatureRoutingModule } from './x-feature-routing.module';
import { AModule } from './../a/a.module';
import { BModule } from './../b/b.module';
import { ABComponent } from './ab.component';

@NgModule({
  imports: [
    AModule,
    BModule,
    CommonModule,
    XFeatureRoutingModule
  ],
  declarations: [ABComponent]

})
export class XFeatureModule { }
