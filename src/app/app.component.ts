import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { ApiLoginService } from './services/api-login.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private checkingSession = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private apiLoginService: ApiLoginService
  ) {
    this.checkSession();
  }

  async checkSession() {
    if (this.checkingSession) return;
    this.checkingSession = true;

    const user = await this.storageService.getItem('user');
    const token = await this.storageService.getItem('token');
    const refreshToken = await this.storageService.getItem('refreshToken');

    if (user && token && refreshToken) {
      // Intentar refrescar el token
      this.apiLoginService
        .refreshToken(token, refreshToken)
        .pipe(
          catchError((error) => {
            console.error('Error al refrescar el token:', error);
            return of(null);
          })
        )
        .subscribe({
          next: async (response) => {
            if (response && response.token && response.refreshToken) {
              // Guardar los nuevos tokens
              await this.storageService.setItem('token', response.token);
              await this.storageService.setItem(
                'refreshToken',
                response.refreshToken
              );
              console.log('Token refrescado exitosamente');
            }
            // Navegar al home independientemente del resultado del refresh
            this.router.navigate(['/tab-home/home'], { replaceUrl: true });
          },
          error: (error) => {
            console.error('Error en la respuesta del refresh:', error);
            // Navegar al home incluso si hay error en el refresh
            this.router.navigate(['/tab-home/home'], { replaceUrl: true });
          },
        });
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
    }

    this.checkingSession = false;
  }
}
