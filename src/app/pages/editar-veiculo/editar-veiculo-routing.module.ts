import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarVeiculoPage } from './editar-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarVeiculoPageRoutingModule {}
