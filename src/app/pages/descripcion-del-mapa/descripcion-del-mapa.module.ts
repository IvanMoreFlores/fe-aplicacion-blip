import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDelMapaPageRoutingModule } from './descripcion-del-mapa-routing.module';

import { DescripcionDelMapaPage } from './descripcion-del-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDelMapaPageRoutingModule
  ],
  declarations: [DescripcionDelMapaPage]
})
export class DescripcionDelMapaPageModule {}
