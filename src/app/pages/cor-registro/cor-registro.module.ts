import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CorRegistroPageRoutingModule } from './cor-registro-routing.module';
import { CorRegistroPage } from './cor-registro.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorRegistroPageRoutingModule,
    SharedModule,
  ],
  declarations: [CorRegistroPage],
})
export class CorRegistroPageModule {}
