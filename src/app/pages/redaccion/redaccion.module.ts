import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RedaccionPageRoutingModule } from './redaccion-routing.module';
import { RedaccionPage } from './redaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedaccionPageRoutingModule
  ],
  declarations: [RedaccionPage]
})
export class RedaccionPageModule {}
