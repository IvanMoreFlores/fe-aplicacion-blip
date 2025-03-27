import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescripcionDeServiciosAdicionalesPageRoutingModule } from './descripcion-de-servicios-adicionales-routing.module';
import { DescripcionDeServiciosAdicionalesPage } from './descripcion-de-servicios-adicionales.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeServiciosAdicionalesPageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionDeServiciosAdicionalesPage],
})
export class DescripcionDeServiciosAdicionalesPageModule {}
