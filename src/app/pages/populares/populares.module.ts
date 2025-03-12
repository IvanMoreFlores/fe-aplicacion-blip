import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularesPageRoutingModule } from './populares-routing.module';

import { PopularesPage } from './populares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularesPageRoutingModule
  ],
  declarations: [PopularesPage]
})
export class PopularesPageModule {}
