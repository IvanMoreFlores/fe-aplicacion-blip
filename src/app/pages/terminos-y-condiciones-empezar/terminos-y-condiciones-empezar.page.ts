import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { JwtService } from '../../services/jwt.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-terminos-y-condiciones-empezar',
  templateUrl: './terminos-y-condiciones-empezar.page.html',
  styleUrls: ['./terminos-y-condiciones-empezar.page.scss'],
})
export class TerminosYCondicionesEmpezarPage implements OnInit {
  data: any;

  constructor(
    private jwtService: JwtService,
    private storageService: StorageService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.init_value();
  }

  async init_value(){
    const token = await this.storageService.getItem('token');
    if(token !== null){
      //obtener datos para llenar cbo boxs
      this.api.getValidate(token).subscribe(
        async (response: any) => {
          this.data = response.data;
          const typeGenders = await this.storageService.getItem('typeGenders');
          console.log('typeGenders');
          console.log(typeGenders);
          if (typeGenders === null) {
            console.log('guardarndo typeGenders')
            await this.storageService.setItem('typeGenders', this.data.infoToRegister.typeGenders);
          }
          const typeDocuments = await this.storageService.getItem('typeDocuments');
          if(typeDocuments === null){
            console.log('guardarndo typeDocuments')
            await this.storageService.setItem('typeDocuments', this.data.infoToRegister.typeDocuments);
          }
        }
      )
    }else{
      const token = await this.jwtService.generateTokenLogPhone('TELEFONO', '99999999', false);
      this.api.getValidate(token).subscribe(
        async (response: any) => {
          this.data = response.data;
          const typeGenders = await this.storageService.getItem('typeGenders');
          console.log('typeGenders');
          console.log(typeGenders);
          if (typeGenders === null) {
            console.log('guardarndo typeGenders')
            await this.storageService.setItem('typeGenders', this.data.infoToRegister.typeGenders);
          }
          const typeDocuments = await this.storageService.getItem('typeDocuments');
          if(typeDocuments === null){
            console.log('guardarndo typeDocuments')
            await this.storageService.setItem('typeDocuments', this.data.infoToRegister.typeDocuments);
          }
        }
      )
    }
  }

}
