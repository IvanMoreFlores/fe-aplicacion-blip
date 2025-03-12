import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruPageRoutingModule } from './pru-routing.module';

import { PruPage } from './pru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruPageRoutingModule
  ],
  declarations: [PruPage]
})
export class PruPageModule {}
