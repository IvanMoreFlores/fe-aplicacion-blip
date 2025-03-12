import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSeguridadPageRoutingModule } from './inicio-seguridad-routing.module';

import { InicioSeguridadPage } from './inicio-seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSeguridadPageRoutingModule
  ],
  declarations: [InicioSeguridadPage]
})
export class InicioSeguridadPageModule {}
