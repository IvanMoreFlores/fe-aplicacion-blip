import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  @Input() type: 'maintenance' | 'server' | 'client' = 'server';
  @Input() statusCode: number | null = null; 

  get title() {
    switch (this.type) {
      case 'maintenance':
        return 'Estamos en Mantenimiento';
      case 'server':
        return '¡Ups! Algo salió mal';
      case 'client':
        return this.getClientTitle();
    }
  }

  get description() {
    switch (this.type) {
      case 'maintenance':
        return 'Nos encontramos en mantenimiento para mejorar tu experiencia. Volveremos pronto.';
      case 'server':
        return 'Estamos experimentando problemas internos. Intenta nuevamente más tarde.';
      case 'client':
        return this.getClientDescription();
    }
  }

  private getClientTitle(): string {
    switch (this.statusCode) {
      case 400: return 'Solicitud incorrecta';
      case 401: return 'No autorizado';
      case 403: return 'Acceso denegado';
      case 404: return 'Página no encontrada';
      default: return 'Algo no está bien';
    }
  }

  private getClientDescription(): string {
    switch (this.statusCode) {
      case 400:
        return 'La solicitud enviada contiene datos incorrectos. Revisa e inténtalo de nuevo.';
      case 401:
        return 'Tu sesión ha expirado o no tienes credenciales válidas.';
      case 403:
        return 'No tienes permisos para acceder a esta funcionalidad.';
      case 404:
        return 'No encontramos la página o el recurso que estás buscando.';
      default:
        return 'Ha ocurrido un error con tu solicitud. Intenta nuevamente.';
    }
  }
}
