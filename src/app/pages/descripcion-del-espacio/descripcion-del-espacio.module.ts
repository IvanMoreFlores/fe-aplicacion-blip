import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDelEspacioPageRoutingModule } from './descripcion-del-espacio-routing.module';

import { DescripcionDelEspacioPage } from './descripcion-del-espacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDelEspacioPageRoutingModule
  ],
  declarations: [DescripcionDelEspacioPage]
})
export class DescripcionDelEspacioPageModule {}
