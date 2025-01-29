import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfCorvalPageRoutingModule } from './inf-corval-routing.module';

import { InfCorvalPage } from './inf-corval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfCorvalPageRoutingModule
  ],
  declarations: [InfCorvalPage]
})
export class InfCorvalPageModule {}
