import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntePenalPageRoutingModule } from './ante-penal-routing.module';

import { AntePenalPage } from './ante-penal.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AntePenalPageRoutingModule],
  declarations: [AntePenalPage],
})
export class AntePenalPageModule {}
