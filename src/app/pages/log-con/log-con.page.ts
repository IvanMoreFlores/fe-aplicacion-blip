import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-log-con',
  templateUrl: './log-con.page.html',
  styleUrls: ['./log-con.page.scss'],
})
export class LogConPage implements OnInit {
  email2: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email2.trim().length > 0;
  }
  constructor(private router: Router, private apiService: ApiService) { }
  goToDisplayPage() {
    this.router.navigate(['/log-bin'], { queryParams: { EMAIL2: this.email2 } });
  }
  ngOnInit() {
    this.init_value();
  }

  async init_value(){
    const valor = await this.apiService.getItem('token');
    if (valor) {
      console.log('token desde el Storage:', valor);
    } else {
      console.log('No hay datos almacenados con esa clave.');
    }
  }
}
