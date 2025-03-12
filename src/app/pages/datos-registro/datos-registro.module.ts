import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatosRegistroPageRoutingModule } from './datos-registro-routing.module';
import { DatosRegistroPage } from './datos-registro.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosRegistroPageRoutingModule,
    SharedModule,
  ],
  declarations: [DatosRegistroPage],
})
export class DatosRegistroPageModule {}
