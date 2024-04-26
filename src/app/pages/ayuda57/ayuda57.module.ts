import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ayuda57PageRoutingModule } from './ayuda57-routing.module';

import { Ayuda57Page } from './ayuda57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ayuda57PageRoutingModule
  ],
  declarations: [Ayuda57Page]
})
export class Ayuda57PageModule {}
