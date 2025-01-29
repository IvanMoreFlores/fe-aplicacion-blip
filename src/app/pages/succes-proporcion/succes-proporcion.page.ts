import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-proporcion',
  templateUrl: './succes-proporcion.page.html',
  styleUrls: ['./succes-proporcion.page.scss'],
})
export class SuccesProporcionPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.router.navigate(['/tab-home/blip-home']); // Cambia '/next-page' por la ruta real
    }, 2000);
  }

}
