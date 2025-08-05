import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { DescripcionNombrePageRoutingModule } from './descripcion-nombre-routing.module';
import { DescripcionNombrePage } from './descripcion-nombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionNombrePageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionNombrePage],
})
export class DescripcionNombreModule {}
