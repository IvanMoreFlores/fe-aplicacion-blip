import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WalkthroughPageRoutingModule } from './walkthrough-routing.module';
import { WalkthroughPage } from './walkthrough.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    WalkthroughPageRoutingModule
  ],
  declarations: [WalkthroughPage]
})
export class WalkthroughPageModule {}
