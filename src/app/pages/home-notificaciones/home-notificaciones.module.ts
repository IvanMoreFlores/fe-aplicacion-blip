import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNotificacionesPageRoutingModule } from './home-notificaciones-routing.module';

import { HomeNotificacionesPage } from './home-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNotificacionesPageRoutingModule
  ],
  declarations: [HomeNotificacionesPage]
})
export class HomeNotificacionesPageModule {}
