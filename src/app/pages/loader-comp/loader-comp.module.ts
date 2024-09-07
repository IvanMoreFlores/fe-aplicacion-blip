import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderCompPageRoutingModule } from './loader-comp-routing.module';

import { LoaderCompPage } from './loader-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderCompPageRoutingModule
  ],
  declarations: [LoaderCompPage]
})
export class LoaderCompPageModule {}
