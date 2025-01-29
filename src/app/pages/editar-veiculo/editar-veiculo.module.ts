import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarVeiculoPageRoutingModule } from './editar-veiculo-routing.module';

import { EditarVeiculoPage } from './editar-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarVeiculoPageRoutingModule
  ],
  declarations: [EditarVeiculoPage]
})
export class EditarVeiculoPageModule {}
