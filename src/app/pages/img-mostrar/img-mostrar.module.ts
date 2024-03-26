import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgMostrarPageRoutingModule } from './img-mostrar-routing.module';

import { ImgMostrarPage } from './img-mostrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgMostrarPageRoutingModule
  ],
  declarations: [ImgMostrarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImgMostrarPageModule {}
