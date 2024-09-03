import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-comp',
  templateUrl: './loader-comp.page.html',
  styleUrls: ['./loader-comp.page.scss'],
})
export class LoaderCompPage implements OnInit, OnDestroy {
  private redirectTimeout: any; // Para almacenar el timeout

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startRedirectTimer();
  }

  ngOnDestroy(): void {
    // Limpiar el timeout para evitar problemas cuando el componente se destruye
    if (this.redirectTimeout) {
      clearTimeout(this.redirectTimeout);
    }
  }

  startRedirectTimer(): void {
    // Iniciar el temporizador de redirección
    this.redirectTimeout = setTimeout(() => {
      this.router.navigate(['/nuevo-anu-pone-alq']); // Cambia '/nuevo-anu-pone-alq' por la ruta deseada
    }, 1000); // Cambia el tiempo según sea necesario
  }
}

