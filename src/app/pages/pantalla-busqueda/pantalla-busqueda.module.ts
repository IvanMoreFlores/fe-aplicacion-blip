import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaBusquedaPageRoutingModule } from './pantalla-busqueda-routing.module';

import { PantallaBusquedaPage } from './pantalla-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaBusquedaPageRoutingModule
  ],
  declarations: [PantallaBusquedaPage]
})
export class PantallaBusquedaPageModule {}
