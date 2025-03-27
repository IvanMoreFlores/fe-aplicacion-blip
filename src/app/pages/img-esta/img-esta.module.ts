import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImgEstaPageRoutingModule } from './img-esta-routing.module';
import { ImgEstaPage } from './img-esta.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgEstaPageRoutingModule,
    NgxDropzoneModule,
    SharedModule,
  ],
  declarations: [ImgEstaPage],
})
export class ImgEstaPageModule {}
