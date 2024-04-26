import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAnfitrionPageRoutingModule } from './panel-anfitrion-routing.module';

import { PanelAnfitrionPage } from './panel-anfitrion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelAnfitrionPageRoutingModule
  ],
  declarations: [PanelAnfitrionPage]
})
export class PanelAnfitrionPageModule {}
