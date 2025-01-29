import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-corr',
  templateUrl: './succes-corr.page.html',
  styleUrls: ['./succes-corr.page.scss'],
})
export class SuccesCorrPage implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.router.navigate(['/recu-cuen']); // Cambia '/next-page' por la ruta real
    }, 2000);
  }

}
