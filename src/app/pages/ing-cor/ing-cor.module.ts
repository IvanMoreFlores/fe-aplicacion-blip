import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngCorPageRoutingModule } from './ing-cor-routing.module';

import { IngCorPage } from './ing-cor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngCorPageRoutingModule
  ],
  declarations: [IngCorPage]
})
export class IngCorPageModule {}
