import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OlvConPageRoutingModule } from './olv-con-routing.module';
import { OlvConPage } from './olv-con.page';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvConPageRoutingModule,
    SharedModule,
  ],
  declarations: [OlvConPage],
})
export class OlvConPageModule {}
