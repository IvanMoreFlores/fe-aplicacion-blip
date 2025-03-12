import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlipHomePageRoutingModule } from './blip-home-routing.module';

import { BlipHomePage } from './blip-home.page';

import { SwiperModule } from 'swiper/angular';

import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlipHomePageRoutingModule,
    SwiperModule
  ],
  declarations: [BlipHomePage, ImageSliderComponent],
})
export class BlipHomePageModule {}
