import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adj-dt-dni',
  templateUrl: './adj-dt-dni.page.html',
  styleUrls: ['./adj-dt-dni.page.scss'],
})
export class AdjDtDniPage implements OnInit {
  dniFront: string = '';
  dniBack: string = '';
  
  constructor(private navCtrl: NavController) {}

  dniFrontB64(event: any) {
    const file: File = event.target.files[0];
    
    if(file){
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.dniFront = reader.result as string;
      };
    }
  }

  dniBackB64(event:any){
    const file:File = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.readAsDataURL(file);
      
      reader.onload=()=> {
        this.dniBack = reader.result as string;
      };
    }
 }

  ngOnInit(){

  }
}
