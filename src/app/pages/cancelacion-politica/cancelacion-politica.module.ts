import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelacionPoliticaPageRoutingModule } from './cancelacion-politica-routing.module';

import { CancelacionPoliticaPage } from './cancelacion-politica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelacionPoliticaPageRoutingModule
  ],
  declarations: [CancelacionPoliticaPage]
})
export class CancelacionPoliticaPageModule {}
