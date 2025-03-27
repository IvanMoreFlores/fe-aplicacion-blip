import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EliPrefPageRoutingModule } from './eli-pref-routing.module';
import { EliPrefPage } from './eli-pref.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliPrefPageRoutingModule,
    SharedModule
  ],
  declarations: [EliPrefPage]
})
export class EliPrefPageModule {}
