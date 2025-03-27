import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AnuncioCaracteristicasPageRoutingModule } from './anuncio-caracteristicas-routing.module';
import { AnuncioCaracteristicasPage } from './anuncio-caracteristicas.page';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioCaracteristicasPageRoutingModule,
    NgxDropzoneModule,
    SharedModule,
    SwiperModule,
  ],
  declarations: [AnuncioCaracteristicasPage],
})
export class AnuncioCaracteristicasPageModule {}
