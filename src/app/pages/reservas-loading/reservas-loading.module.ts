import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasLoadingPageRoutingModule } from './reservas-loading-routing.module';

import { ReservasLoadingPage } from './reservas-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasLoadingPageRoutingModule
  ],
  declarations: [ReservasLoadingPage]
})
export class ReservasLoadingPageModule {}
