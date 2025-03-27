import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescripcionDelEspacioPageRoutingModule } from './descripcion-del-espacio-routing.module';
import { DescripcionDelEspacioPage } from './descripcion-del-espacio.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDelEspacioPageRoutingModule,
    SharedModule,
  ],
  declarations: [DescripcionDelEspacioPage],
})
export class DescripcionDelEspacioPageModule {}
