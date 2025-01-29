import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
