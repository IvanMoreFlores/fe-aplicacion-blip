import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importamos AlertController
import { Router, ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-descripcion-del-mapa',
  templateUrl: './descripcion-del-mapa.page.html',
  styleUrls: ['./descripcion-del-mapa.page.scss'],
})
export class DescripcionDelMapaPage implements OnInit {

  map!: L.Map;
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  servicio: number[] = [];
  gar_largo: string = '';
  gar_ancho: string = '';
  gar_alto: string = '';
  uga_direcc: string = '';
  uga_lat: string = '';
  uga_long: string = '';


  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.setValues();
  } // Inyectamos AlertController

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.initMap();
    this.getUserLocation();
  }

  initMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    // Añadir un evento de clic al mapa
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;

      // Mostrar latitud y longitud
      console.log(`Latitud: ${lat}, Longitud: ${lon}`);

      // Llamar a la función de geocodificación inversa
      this.reverseGeocode(lat, lon);
    });
  }

  getUserLocation() {
    console.log('obtener ubicacion');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.map.setView([lat, lon], 13); // Centra el mapa en la ubicación del usuario

          // Añadir un marcador para la ubicación del usuario
          const userIcon = L.icon({
            iconUrl: 'assets/images/marcador.png', // Ruta a un ícono personalizado para el usuario
            iconSize: [25, 45],
            iconAnchor: [12.5, 45],
            popupAnchor: [0, -45]
          });

          L.marker([lat, lon], { icon: userIcon }).addTo(this.map)
            .bindPopup('Usted esta aqui')
            .openPopup();
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
          alert('No se pudo obtener la ubicación. Verifica los permisos de ubicación.');
        }
      );
    } else {
      alert('La geolocalización no es compatible con este navegador.');
    }
  }

  async setValues() {
    this.route.queryParams.subscribe(params => {
      this.tga_id = params['tga_id'];
      this.direccion = params['direccion'];
      this.distrito = params['distrito'];
      this.ciudad = params['ciudad'];
      this.referencia = params['referencia'];
      this.detalles = params['detalles'];
      this.servicio = params['servicio'];
      this.gar_largo = params['gar_largo'];
      this.gar_ancho = params['gar_ancho'];
      this.gar_alto = params['gar_alto'];
      this.uga_lat = params['uga_lat'];
      this.uga_long = params['uga_long'];
      this.uga_direcc = params['uga_direcc'];
    });
  }

  // Método para mostrar alerta
  async mostrarAlerta(accion: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Estás seguro de que deseas ' + accion.toLowerCase() + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Operación cancelada');
          }
        }, {
          text: accion,
          cssClass: 'primary-alert-button', // Clase para cambiar el color del botón y del texto
          handler: () => {
            console.log('Operación realizada: ' + accion);
            // Aquí puedes agregar la lógica correspondiente a la acción
          }
        }
      ]
    });

    await alert.present();
  }

  searchAddress() {
    const addressInput = (document.getElementById('address-input') as HTMLInputElement).value;

    const userIcon = L.icon({
      iconUrl: 'assets/images/marcador.png',
      iconSize: [25, 45],
      iconAnchor: [12.5, 45],
      popupAnchor: [0, -45]
    });

    if (addressInput) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressInput)}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            this.map.setView([lat, lon], 13); // Centrar el mapa en la ubicación encontrada

            console.log(lat);
            console.log(lon);

            // Añadir un nuevo marcador
            L.marker([lat, lon], { icon: userIcon }).addTo(this.map)
              .bindPopup(`Dirección encontrada: ${addressInput}`)
              .openPopup();
          } else {
            alert('No se encontró la dirección');
          }
        })
        .catch(error => {
          console.error('Error al buscar la dirección:', error);
          alert('Hubo un error al buscar la dirección');
        });
    } else {
      alert('Por favor, introduce una dirección');
    }
  }

  // Función para hacer reverse geocoding (geocodificación inversa)
  reverseGeocode(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    const userIcon = L.icon({
      iconUrl: 'assets/images/marcador.png',
      iconSize: [25, 45],
      iconAnchor: [12.5, 45],
      popupAnchor: [0, -45]
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.display_name) {
          const address = data.display_name;

          this.uga_direcc = data.display_name;
          console.log('direccion texto');
          console.log(this.uga_direcc);
          this.uga_lat = lat.toString();
          this.uga_long = lon.toString();

          // Añadir un marcador en el mapa con la información de la ubicación
          L.marker([lat, lon], { icon: userIcon }).addTo(this.map)
            .bindPopup(`Ubicación: ${address}`)
            .openPopup();

          console.log(`Ubicación: ${address}`);
        } else {
          alert('No se pudo obtener el nombre de la ubicación');
        }
      })
      .catch(error => {
        console.error('Error al hacer geocodificación inversa:', error);
        alert('Hubo un error al obtener la ubicación');
      });
  }

  sendData() {
    this.router.navigate(['/eli-pref'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        servicio: this.servicio,
        gar_largo: this.gar_largo,
        gar_ancho: this.gar_ancho,
        gar_alto: this.gar_alto,
        uga_direcc: this.uga_direcc,
        uga_lat: this.uga_lat,
        uga_long: this.uga_long
      }
    });
  }
}
