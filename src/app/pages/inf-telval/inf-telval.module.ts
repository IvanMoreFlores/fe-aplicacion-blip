import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfTelvalPageRoutingModule } from './inf-telval-routing.module';

import { InfTelvalPage } from './inf-telval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfTelvalPageRoutingModule
  ],
  declarations: [InfTelvalPage]
})
export class InfTelvalPageModule {}
