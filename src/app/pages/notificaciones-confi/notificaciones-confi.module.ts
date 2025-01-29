import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesConfiPageRoutingModule } from './notificaciones-confi-routing.module';

import { NotificacionesConfiPage } from './notificaciones-confi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesConfiPageRoutingModule
  ],
  declarations: [NotificacionesConfiPage]
})
export class NotificacionesConfiPageModule {}
