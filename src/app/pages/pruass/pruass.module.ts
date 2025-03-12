import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruassPageRoutingModule } from './pruass-routing.module';

import { PruassPage } from './pruass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruassPageRoutingModule
  ],
  declarations: [PruassPage]
})
export class PruassPageModule {}
