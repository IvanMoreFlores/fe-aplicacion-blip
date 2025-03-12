import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaTuCocheraPage } from './reserva-tu-cochera.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ReservaTuCocheraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonicModule,CommonModule],
  exports: [RouterModule],
})
export class ReservaTuCocheraPageRoutingModule {}
