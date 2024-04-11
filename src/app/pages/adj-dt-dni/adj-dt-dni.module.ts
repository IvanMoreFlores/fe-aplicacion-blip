import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdjDtDniPageRoutingModule } from './adj-dt-dni-routing.module';
import { AdjDtDniPage } from './adj-dt-dni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjDtDniPageRoutingModule
  ],
  declarations: [AdjDtDniPage]
})
export class AdjDtDniPageModule {}
