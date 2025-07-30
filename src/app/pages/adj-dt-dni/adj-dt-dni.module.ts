import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdjDtDniPageRoutingModule } from './adj-dt-dni-routing.module';
import { AdjDtDniPage } from './adj-dt-dni.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from "src/app/components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjDtDniPageRoutingModule,
    NgxDropzoneModule,
    SharedModule
],
  declarations: [AdjDtDniPage]
})
export class AdjDtDniPageModule {}
