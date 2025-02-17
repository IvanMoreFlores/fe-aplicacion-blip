import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatosNumeroPageRoutingModule } from './datos-numero-routing.module';
import { DatosNumeroPage } from './datos-numero.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosNumeroPageRoutingModule,
    SharedModule,
  ],
  declarations: [DatosNumeroPage],
})
export class DatosNumeroPageModule {}
