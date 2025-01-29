import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfCorcodPageRoutingModule } from './inf-corcod-routing.module';

import { InfCorcodPage } from './inf-corcod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfCorcodPageRoutingModule
  ],
  declarations: [InfCorcodPage]
})
export class InfCorcodPageModule {}
