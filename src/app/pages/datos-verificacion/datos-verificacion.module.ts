import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatosVerificacionPageRoutingModule } from './datos-verificacion-routing.module';
import { DatosVerificacionPage } from './datos-verificacion.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosVerificacionPageRoutingModule,
    SharedModule,
  ],
  declarations: [DatosVerificacionPage],
})
export class DatosVerificacionPageModule {}
