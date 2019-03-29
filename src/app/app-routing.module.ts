import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'a', loadChildren: './a/a.module#AModule'},
    { path: 'a/nested', loadChildren: './a/a.module#AModule'},
    { path: 'b', loadChildren: './b/b.module#BModule'},
    { path: 'b/nested', loadChildren: './b/b.module#BModule'},
    { path: 'c', loadChildren: './c/c.module#CModule'},
    { path: 'c/nested', loadChildren: './c/c.module#CModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
