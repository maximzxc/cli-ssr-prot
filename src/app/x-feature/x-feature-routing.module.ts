import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABComponent } from './ab.component';

const routes: Routes = [
  {
    path: '',
    component: ABComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XFeatureRoutingModule { }
