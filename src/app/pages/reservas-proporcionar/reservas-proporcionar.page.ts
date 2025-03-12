import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-proporcionar',
  templateUrl: './reservas-proporcionar.page.html',
  styleUrls: ['./reservas-proporcionar.page.scss'],
})
export class ReservasProporcionarPage implements OnInit {
  comentarios: string = '';

  constructor(private router: Router) {}

  enviarFeedback() {
    if (!this.comentarios.trim()) {
      alert('Por favor ingresa tus comentarios antes de enviar.');
      return;
    }

    // Mensaje de confirmación (puedes sustituirlo por una redirección o API)
    alert('¡Gracias por tu feedback!');

    // Navegar a otra página (opcional, ajusta la ruta si es necesario)
    this.router.navigate(['/succes-proporcion']);
  }
  ngOnInit() {
  }

}
