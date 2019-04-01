import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YFeatureRoutingModule } from './y-feature-routing.module';
import { AModule } from './../a/a.module';
import { BModule } from './../b/b.module';
import { CModule } from './../c/c.module';
import { ABCComponent } from './abc.component';


@NgModule({
  imports: [
    CommonModule,
    AModule,
    BModule,
    CModule,
    YFeatureRoutingModule
  ],
  declarations: [ABCComponent]
})
export class YFeatureModule { }
