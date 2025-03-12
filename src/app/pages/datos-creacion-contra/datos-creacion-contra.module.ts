import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatosCreacionContraPageRoutingModule } from './datos-creacion-contra-routing.module';
import { DatosCreacionContraPage } from './datos-creacion-contra.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosCreacionContraPageRoutingModule,
    SharedModule,
  ],
  declarations: [DatosCreacionContraPage]
})
export class DatosCreacionContraPageModule {}
