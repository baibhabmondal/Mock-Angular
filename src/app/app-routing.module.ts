import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"
const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
