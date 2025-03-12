import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contra-verf',
  templateUrl: './contra-verf.page.html',
  styleUrls: ['./contra-verf.page.scss'],
})
export class ContraVerfPage implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.router.navigate(['/login']); // Cambia '/' por la ruta real
    }, 2000);
  }

}
