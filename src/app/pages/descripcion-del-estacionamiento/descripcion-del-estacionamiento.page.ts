import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-descripcion-del-estacionamiento',
  templateUrl: './descripcion-del-estacionamiento.page.html',
  styleUrls: ['./descripcion-del-estacionamiento.page.scss'],
})
export class DescripcionDelEstacionamientoPage implements OnInit {
  data: any;
  text: string = 'new';
  advertisements: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private storage: StorageService
  ) {
    console.log('Constructor ejecutado');
  }

  ngOnInit() {
    this.loadContent(); // Llamar al método sin await ya que ngOnInit no es async
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ejecutado - Descripción del estacionamiento');
    this.loadContent();
    // También puedes cargar contenido aquí si prefieres seguir el ciclo de vida de Ionic
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  async loadContent() {
    this.isLoading = true; // Asegurar que loading está activado
    const token = await this.storage.getItem('token');

    this.api.getAds(token).subscribe(
      (response: any) => {
        this.advertisements = response.data;
        console.log(
          '🚀 ~ DescripcionDelEstacionamientoPage ~ loadContent ~ this.advertisements:',
          this.advertisements
        );

        if(this.advertisements.length > 0) {
          this.router.navigate(['tab-home'])

        }

        this.isLoading = false; // Finalizar loading después de cargar los anuncios
      },
      (error: any) => {
        console.error('Error al cargar los anuncios:', error);
        this.isLoading = false; // Finalizar loading incluso en caso de error
      }
    );
  }

  navigate() {
    this.router.navigate(['/descripcion-de-nombre']);
  }
}
