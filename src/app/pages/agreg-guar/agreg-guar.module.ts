import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregGuarPageRoutingModule } from './agreg-guar-routing.module';

import { AgregGuarPage } from './agreg-guar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregGuarPageRoutingModule
  ],
  declarations: [AgregGuarPage]
})
export class AgregGuarPageModule {}
