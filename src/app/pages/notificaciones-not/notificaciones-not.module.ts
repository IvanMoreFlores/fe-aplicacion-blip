import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesNotPageRoutingModule } from './notificaciones-not-routing.module';

import { NotificacionesNotPage } from './notificaciones-not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesNotPageRoutingModule
  ],
  declarations: [NotificacionesNotPage]
})
export class NotificacionesNotPageModule {}
