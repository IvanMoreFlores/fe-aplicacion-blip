import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescripcionEspacioPageRoutingModule } from './descripcion-espacio-routing.module';
import { DescripcionEspacioPage } from './descripcion-espacio.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionEspacioPageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionEspacioPage],
})
export class DescripcionEspacioModule {}
