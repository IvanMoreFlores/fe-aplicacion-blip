import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgMAntePenPageRoutingModule } from './img-m-ante-pen-routing.module';

import { ImgMAntePenPage } from './img-m-ante-pen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgMAntePenPageRoutingModule
  ],
  declarations: [ImgMAntePenPage]
})
export class ImgMAntePenPageModule {}
