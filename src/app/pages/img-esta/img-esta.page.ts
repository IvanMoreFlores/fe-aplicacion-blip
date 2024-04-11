import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-img-esta',
  templateUrl: './img-esta.page.html',
  styleUrls: ['./img-esta.page.scss'],
})
export class ImgEstaPage implements OnInit {

  esta1: string = '';
  esta2: string = '';
  esta3: string = '';
  
  constructor(private navCtrl: NavController) {}

  park1(event: any) {
    const file: File = event.target.files[0];
    
    if(file){
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.esta1 = reader.result as string;
      };
    }
  }

  park2(event:any){
    const file:File = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.readAsDataURL(file);
      
      reader.onload=()=> {
        this.esta2 = reader.result as string;
      };
    }
 }
 park3(event:any){
  const file:File = event.target.files[0];

  if(file){
    const reader = new FileReader();

    reader.readAsDataURL(file);
    
    reader.onload=()=> {
      this.esta3 = reader.result as string;
    };
  }
}
 ngOnInit(){
  }

}
