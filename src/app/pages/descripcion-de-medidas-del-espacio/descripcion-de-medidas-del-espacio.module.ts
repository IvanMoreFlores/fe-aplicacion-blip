import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescripcionDeMedidasDelEspacioPageRoutingModule } from './descripcion-de-medidas-del-espacio-routing.module';
import { DescripcionDeMedidasDelEspacioPage } from './descripcion-de-medidas-del-espacio.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeMedidasDelEspacioPageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionDeMedidasDelEspacioPage],
})
export class DescripcionDeMedidasDelEspacioPageModule {}
