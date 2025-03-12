import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TerminosYCondicionesPageRoutingModule } from './terminos-y-condiciones-routing.module';
import { TerminosYCondicionesPage } from './terminos-y-condiciones.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosYCondicionesPageRoutingModule,
    SharedModule,
  ],
  declarations: [TerminosYCondicionesPage]
})
export class TerminosYCondicionesPageModule {}
