import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABCComponent } from './abc.component';

const routes: Routes = [
  {
    path: '',
    component: ABCComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YFeatureRoutingModule { }
