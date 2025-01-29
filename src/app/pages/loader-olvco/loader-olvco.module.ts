import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderOlvcoPageRoutingModule } from './loader-olvco-routing.module';

import { LoaderOlvcoPage } from './loader-olvco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderOlvcoPageRoutingModule
  ],
  declarations: [LoaderOlvcoPage]
})
export class LoaderOlvcoPageModule {}
