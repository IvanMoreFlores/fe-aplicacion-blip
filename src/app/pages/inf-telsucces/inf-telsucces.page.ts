import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inf-telsucces',
  templateUrl: './inf-telsucces.page.html',
  styleUrls: ['./inf-telsucces.page.scss'],
})
export class InfTelsuccesPage implements OnInit {

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
