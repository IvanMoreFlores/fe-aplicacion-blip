import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacContraPageRoutingModule } from './creac-contra-routing.module';

import { CreacContraPage } from './creac-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacContraPageRoutingModule
  ],
  declarations: [CreacContraPage]
})
export class CreacContraPageModule {}
