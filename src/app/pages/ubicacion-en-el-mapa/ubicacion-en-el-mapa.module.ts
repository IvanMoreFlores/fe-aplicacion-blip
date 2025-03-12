import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionEnElMapaPageRoutingModule } from './ubicacion-en-el-mapa-routing.module';

import { UbicacionEnElMapaPage } from './ubicacion-en-el-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionEnElMapaPageRoutingModule
  ],
  declarations: [UbicacionEnElMapaPage]
})
export class UbicacionEnElMapaPageModule {}
