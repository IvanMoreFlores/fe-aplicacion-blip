import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionAlquilarPageRoutingModule } from './configuracion-alquilar-routing.module';

import { ConfiguracionAlquilarPage } from './configuracion-alquilar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionAlquilarPageRoutingModule
  ],
  declarations: [ConfiguracionAlquilarPage]
})
export class ConfiguracionAlquilarPageModule {}
