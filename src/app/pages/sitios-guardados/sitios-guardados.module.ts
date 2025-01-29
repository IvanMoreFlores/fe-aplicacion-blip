import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitiosGuardadosPageRoutingModule } from './sitios-guardados-routing.module';

import { SitiosGuardadosPage } from './sitios-guardados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitiosGuardadosPageRoutingModule
  ],
  declarations: [SitiosGuardadosPage]
})
export class SitiosGuardadosPageModule {}
