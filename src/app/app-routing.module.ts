import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ModalModule } from "ngx-bootstrap";

const routes: Routes = [
  { path: '', redirectTo: '/List', pathMatch: 'full' },
  { path: 'List', component: ListComponent, pathMatch: 'full' },
  // { path: 'Add', component: DetailsComponent, pathMatch: 'full' },
  { path: 'Edit', component: DetailsComponent, pathMatch: 'full' },  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
