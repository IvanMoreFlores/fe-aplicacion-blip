import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfTelcodPageRoutingModule } from './inf-telcod-routing.module';

import { InfTelcodPage } from './inf-telcod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfTelcodPageRoutingModule
  ],
  declarations: [InfTelcodPage]
})
export class InfTelcodPageModule {}
