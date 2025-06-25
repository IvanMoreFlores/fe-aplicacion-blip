import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.page.html',
  styleUrls: ['./terminos-y-condiciones.page.scss'],
})
export class TerminosYCondicionesPage implements OnInit {
  data:any;

  isChecked: boolean = false;
  constructor(
    private readonly modalcontroller: ModalController,
    private readonly jwtService: JwtService,
    private readonly storageService: StorageService,
    private readonly api: ApiService,
    private readonly router: Router,
  ) { }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  dismissModal() {
    this.modalcontroller.dismiss(null, 'back-log')
  }
  ngOnInit() {
    this.init_value();
  }

  async init_value(){
    console.log('init-value comienza');
    const token = await this.storageService.getItem('token');
    console.log('token',token);
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

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  sendMoreInformation(){
    this.router.navigate(['/terminos-y-condiciones-mas-informacion']);
  }

  goToDisplayPage() {
    if(this.isChecked){
      this.router.navigate(['/datos-registro']);
    }
  }
}
