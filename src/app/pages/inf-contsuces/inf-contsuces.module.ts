import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfContsucesPageRoutingModule } from './inf-contsuces-routing.module';

import { InfContsucesPage } from './inf-contsuces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfContsucesPageRoutingModule
  ],
  declarations: [InfContsucesPage]
})
export class InfContsucesPageModule {}
