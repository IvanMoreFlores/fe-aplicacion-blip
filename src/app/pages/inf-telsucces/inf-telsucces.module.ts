import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfTelsuccesPageRoutingModule } from './inf-telsucces-routing.module';

import { InfTelsuccesPage } from './inf-telsucces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfTelsuccesPageRoutingModule
  ],
  declarations: [InfTelsuccesPage]
})
export class InfTelsuccesPageModule {}
