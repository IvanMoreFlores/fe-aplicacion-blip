import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CorControlvPageRoutingModule } from './cor-controlv-routing.module';
import { CorControlvPage } from './cor-controlv.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorControlvPageRoutingModule,
    SharedModule,
  ],
  declarations: [CorControlvPage],
})
export class CorControlvPageModule {}
