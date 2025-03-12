import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonalPageRoutingModule } from './info-personal-routing.module';

import { InfoPersonalPage } from './info-personal.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonalPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [InfoPersonalPage]
})
export class InfoPersonalPageModule {}
