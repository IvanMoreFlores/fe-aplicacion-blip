import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfCorsuccesPageRoutingModule } from './inf-corsucces-routing.module';

import { InfCorsuccesPage } from './inf-corsucces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfCorsuccesPageRoutingModule
  ],
  declarations: [InfCorsuccesPage]
})
export class InfCorsuccesPageModule {}
