import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfPersoPageRoutingModule } from './inf-perso-routing.module';

import { InfPersoPage } from './inf-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfPersoPageRoutingModule
  ],
  declarations: [InfPersoPage]
})
export class InfPersoPageModule {}
