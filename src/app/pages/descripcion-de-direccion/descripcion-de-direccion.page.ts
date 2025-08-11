import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ModalController } from '@ionic/angular';
import { MapSelectorComponent } from 'src/app/components/map-selector/map-selector.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-descripcion-de-direccion',
  templateUrl: './descripcion-de-direccion.page.html',
  styleUrls: ['./descripcion-de-direccion.page.scss'],
})
export class DescripcionDeDireccionPage implements OnInit {
  distritoData: any;
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  ciudades: { key: string; value: string }[] = [{ key: '1', value: 'Lima' }];
  distritos: { key: string; value: string }[] = [];
  selectedLocation: { lat: number; lng: number } | null = null;
  isLoading: boolean = false;
  apiKey: string = 'AIzaSyBZkfs324ThxziQZNBudoIPv8JT8Vp7V2s';
  constructor(
    private api: ApiService,
    private router: Router,
    private storage: StorageService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private modalController: ModalController
  ) {}
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  ngOnInit() {
    this.getValuesToRegister();
    this.setValues();
  }

  async getValuesToRegister() {
    const token = await this.storage.getItem('token');
    this.api.getAdvertiseConfig(token).subscribe((response: any) => {
      const data = response.data;
      this.storage.setItem('adConfig', data);
    });
  }

  async setValues() {
    const adConfig = await this.storage.getItem('adConfig');
    console.log(
      '🚀 ~ DescripcionDeDireccionPage ~ setValues ~ adConfig:',
      adConfig
    );
    this.distritoData = adConfig.districts;
    for (const item of this.distritoData) {
      this.distritos.push({
        key: item.id_distrito.toString(),
        value: item.nombre_distrito,
      });
    }
    this.route.queryParams.subscribe((params) => {
      this.tga_id = params['tga_id'];
    });
  }

  async nextMap() {
    // Abrir modal con mapa para seleccionar ubicación
    const modal = await this.modalController.create({
      component: MapSelectorComponent,
      componentProps: {
        initialAddress: this.direccion,
        apiKey: this.apiKey,
      },
      cssClass: 'map-modal',
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (role === 'confirm' && data) {
      this.selectedLocation = data.position;
      if (data.address) {
        this.direccion = data.address;
      }

      await this.geocodeLocationForComponents(data.position);
    }
  }

  async geocodeLocationForComponents(position: { lat: number; lng: number }) {
    this.isLoading = true;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&key=${this.apiKey}`;

    this.http.get(url).subscribe(
      async (response: any) => {
        console.log('🚀 ~ DescripcionDeDireccionPage ~ response:', response);
        this.isLoading = false;
        console.log(
          '🚀 ~ DescripcionDeDireccionPage ~ this.distritos:',
          this.distritos
        );

        if (
          response.status === 'OK' &&
          response.results &&
          response.results.length > 0
        ) {
          const result = response.results[0];
          const addressComponents = result.address_components;
          const distritoEncontrado = addressComponents.find(
            (component: any) =>
              component.types.includes('locality') &&
              component.types.includes('political') &&
              component.types.length === 2
          ).long_name;
          const ciudadEncontrada = addressComponents.find(
            (component: any) =>
              component.types.includes('administrative_area_level_2') &&
              component.types.includes('political') &&
              component.types.length === 2
          ).long_name;

          // Intentar asignar distrito
          if (distritoEncontrado) {
            for (const dist of this.distritos) {
              if (
                dist.value
                  .toLowerCase()
                  .includes(distritoEncontrado.toLowerCase()) ||
                distritoEncontrado
                  .toLowerCase()
                  .includes(dist.value.toLowerCase())
              ) {
                this.distrito = dist.key;
                console.log(
                  'Distrito seleccionado automáticamente:',
                  dist.value
                );
                break;
              }
            }
          }

          // Asignar ciudad
          if (ciudadEncontrada) {
            for (const city of this.ciudades) {
              if (
                city.value
                  .toLowerCase()
                  .includes(ciudadEncontrada.toLowerCase()) ||
                ciudadEncontrada
                  .toLowerCase()
                  .includes(city.value.toLowerCase())
              ) {
                this.ciudad = city.key;
                console.log('Ciudad seleccionada automáticamente:', city.value);
                break;
              }
            }
          }
        }
      },
      async (error) => {
        console.error('Error al geocodificar:', error);
        this.isLoading = false;
      }
    );
  }

  nextPage() {
    if (!this.direccion || this.direccion.length < 1) {
      alert('Debes incluir una direccion.');
      return;
    }

    if (!this.selectedLocation) {
      this.isLoading = true;
      const searchAddress = `${this.direccion}, Lima, Perú`;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        searchAddress
      )}&key=${this.apiKey}`;
      this.http.get(url).subscribe(
        async (response: any) => {
          if (
            response.status !== 'OK' ||
            !response.results ||
            response.results.length === 0
          ) {
            alert(
              'No se pudo verificar la dirección. Por favor, selecciona la ubicación en el mapa.'
            );
            return;
          }

          const result = response.results[0];
          this.selectedLocation = {
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          };

          // Extraer distrito y ciudad
          const addressComponents = result.address_components;
          const distritoEncontrado = addressComponents.find(
            (component: any) =>
              component.types.includes('locality') &&
              component.types.includes('political') &&
              component.types.length === 2
          ).long_name;
          const ciudadEncontrada = addressComponents.find(
            (component: any) =>
              component.types.includes('administrative_area_level_2') &&
              component.types.includes('political') &&
              component.types.length === 2
          ).long_name;

          // Intentar asignar distrito y ciudad
          if (distritoEncontrado) {
            for (const dist of this.distritos) {
              if (
                dist.value
                  .toLowerCase()
                  .includes(distritoEncontrado.toLowerCase()) ||
                distritoEncontrado
                  .toLowerCase()
                  .includes(dist.value.toLowerCase())
              ) {
                this.distrito = dist.key;
                break;
              }
            }
          }

          if (ciudadEncontrada) {
            for (const city of this.ciudades) {
              if (
                city.value
                  .toLowerCase()
                  .includes(ciudadEncontrada.toLowerCase()) ||
                ciudadEncontrada
                  .toLowerCase()
                  .includes(city.value.toLowerCase())
              ) {
                this.ciudad = city.key;
                break;
              }
            }
          }

          // Guardar en storage
          // await this.storage.setItem('lastGeocodedLocation', {
          //   lat: this.selectedLocation.lat,
          //   lng: this.selectedLocation.lng,
          //   formattedAddress: result.formatted_address,
          // });

          // Validar datos y navegar
          this.validateAndNavigate();
          this.isLoading = false;
        },
        async (error) => {
          console.error('Error al geocodificar:', error);
          this.isLoading = false;
          alert(
            'Ocurrió un error al verificar la dirección. Por favor, selecciona la ubicación en el mapa.'
          );
        }
      );
    } else {
      // Ya tenemos las coordenadas del mapa, validar y continuar
      this.validateAndNavigate();
    }
  }

  validateAndNavigate() {
    if (!this.ciudad || this.ciudad.length < 1) {
      alert('Debes seleccionar una ciudad.');
      return;
    }

    if (!this.distrito || this.distrito.length < 1) {
      alert('Debes seleccionar un distrito.');
      return;
    }

    if (!this.selectedLocation) {
      alert('Debes seleccionar una ubicación en el mapa.');
      return;
    }

    // Navegar a la siguiente página con todos los datos
    this.router.navigate(['/app-descripcion-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        lat: this.selectedLocation.lat,
        lng: this.selectedLocation.lng,
      },
    });
  }

  async return() {
    this.router.navigate(['/descripcion-del-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
      },
    });
  }

  onCiudadChange(selectedCiudad: { key: string; value: string }) {
    this.ciudad = selectedCiudad.key;
    console.log('Ciudad seleccionado:', selectedCiudad);
  }

  onDistritoChange(selectedDistrito: { key: string; value: string }) {
    this.distrito = selectedDistrito.key;
    console.log('Distrito seleccionado:', selectedDistrito);
  }
}
