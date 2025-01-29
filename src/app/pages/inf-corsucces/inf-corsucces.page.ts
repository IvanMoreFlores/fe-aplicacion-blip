import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inf-corsucces',
  templateUrl: './inf-corsucces.page.html',
  styleUrls: ['./inf-corsucces.page.scss'],
})
export class InfCorsuccesPage implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.router.navigate(['/info-personal']); // Cambia '/next-page' por la ruta real
    }, 2000);
  }

}
