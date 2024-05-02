import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentacionInquilinosInformacionPageRoutingModule } from './presentacion-inquilinos-informacion-routing.module';

import { PresentacionInquilinosInformacionPage } from './presentacion-inquilinos-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionInquilinosInformacionPageRoutingModule
  ],
  declarations: [PresentacionInquilinosInformacionPage]
})
export class PresentacionInquilinosInformacionPageModule {}
