import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescripcionDeDireccionPageRoutingModule } from './descripcion-de-direccion-routing.module';
import { DescripcionDeDireccionPage } from './descripcion-de-direccion.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeDireccionPageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionDeDireccionPage],
})
export class DescripcionDeDireccionPageModule {}
