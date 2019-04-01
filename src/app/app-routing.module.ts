import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', loadChildren: './x-feature/x-feature.module#XFeatureModule'},
    { path: 'feature-y', loadChildren: './y-feature/y-feature.module#YFeatureModule'},
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
