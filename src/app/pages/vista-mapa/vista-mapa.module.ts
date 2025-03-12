import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaMapaPageRoutingModule } from './vista-mapa-routing.module';

import { VistaMapaPage } from './vista-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaMapaPageRoutingModule
  ],
  declarations: [VistaMapaPage]
})
export class VistaMapaPageModule {}
