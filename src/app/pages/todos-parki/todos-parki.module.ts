import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosParkiPageRoutingModule } from './todos-parki-routing.module';

import { TodosParkiPage } from './todos-parki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosParkiPageRoutingModule
  ],
  declarations: [TodosParkiPage]
})
export class TodosParkiPageModule {}
