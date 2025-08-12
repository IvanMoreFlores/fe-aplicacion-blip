import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController, LoadingController, Platform } from '@ionic/angular';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-map-selector',
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss'],
})
export class MapSelectorComponent implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef;
  @Input() initialAddress!: string;
  @Input() apiKey: string='AIzaSyBZkfs324ThxziQZNBudoIPv8JT8Vp7V2s';
  @Input() userLocation: any; // Nueva propiedad para la ubicación del usuario

  map: any;
  currentPosition!: { lat: number, lng: number };
  currentAddress: string = '';
  private geocoder: any;
  private isLoading = false;

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private loadingController: LoadingController,
    private platform: Platform
  ) { }

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.loadGoogleMaps();
    await this.initMap();
  }

  private loadGoogleMaps(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          resolve();
        };
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  }

  async initMap() {
    const loading = await this.loadingController.create({
      message: 'Cargando mapa...',
      spinner: 'circular',
    });
    await loading.present();

    try {
      this.geocoder = new google.maps.Geocoder();

      // Opciones iniciales del mapa
      const mapOptions = {
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      // Si hay ubicación del usuario guardada, usarla primero
      if (this.userLocation && this.userLocation.lat && this.userLocation.lng) {
        this.currentPosition = {
          lat: this.userLocation.lat,
          lng: this.userLocation.lng
        };
        this.currentAddress = this.userLocation.address || '';
        this.map.setCenter(this.currentPosition);
        
        // Si no hay dirección, hacer geocodificación inversa
        if (!this.currentAddress) {
          this.reverseGeocode(this.currentPosition);
        }
      }
      // Si hay dirección inicial, geocodificarla
      else if (this.initialAddress) {
        await this.geocodeAddress(this.initialAddress);
      } else {
        // Si no hay dirección, usar la ubicación actual
        await this.getCurrentLocation();
      }

      // Listener para actualizar la dirección cuando se mueve el mapa
      this.map.addListener('idle', () => {
        const center = this.map.getCenter();
        this.currentPosition = {
          lat: center.lat(),
          lng: center.lng()
        };
        this.reverseGeocode(this.currentPosition);
      });
    } catch (error) {
      console.error('Error inicializando el mapa:', error);
    } finally {
      await loading.dismiss();
    }
  }

  async geocodeAddress(address: string) {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
      this.http.get(url).subscribe((response: any) => {
        if (response.status === 'OK' && response.results && response.results.length > 0) {
          const location = response.results[0].geometry.location;
          this.currentPosition = {
            lat: location.lat,
            lng: location.lng
          };
          this.currentAddress = response.results[0].formatted_address;

          // Centrar mapa en la posición
          this.map.setCenter(this.currentPosition);
        } else {
          console.error('No se encontró la dirección');
          this.getCurrentLocation(); // Usar ubicación actual como fallback
        }
      }, error => {
        console.error('Error geocodificando dirección:', error);
        this.getCurrentLocation(); // Usar ubicación actual como fallback
      });
    } catch (error) {
      console.error('Error:', error);
      this.getCurrentLocation(); // Usar ubicación actual como fallback
    }
  }

  async getCurrentLocation() {
    if (this.isLoading) return;
    this.isLoading = true;

    const loading = await this.loadingController.create({
      message: 'Obteniendo ubicación...',
      spinner: 'circular',
    });
    await loading.present();

    try {
      // Configurar opciones para mayor precisión
      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000  // 10 segundos
      };

      // Solicitar permiso antes de obtener la ubicación
      const permissionStatus = await Geolocation.checkPermissions();

      if (permissionStatus.location !== 'granted') {
        await Geolocation.requestPermissions();
      }

      // Obtener la posición con Capacitor v6
      const position = await Geolocation.getCurrentPosition(options);

      this.currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Centrar mapa en la posición obtenida
      this.map.setCenter(this.currentPosition);

      // Obtener la dirección para esa ubicación
      this.reverseGeocode(this.currentPosition);
    } catch (error) {
      console.error('Error obteniendo ubicación actual:', error);

      // Ubicación por defecto (Lima, Perú)
      this.currentPosition = {
        lat: -12.046374,
        lng: -77.042793
      };
      this.map.setCenter(this.currentPosition);
      this.reverseGeocode(this.currentPosition);

      // Mostrar mensaje de error al usuario
      if (this.platform.is('cordova') || this.platform.is('capacitor')) {
        alert('No se pudo obtener tu ubicación. Por favor, asegúrate de que los permisos de localización estén activados.');
      } else {
        alert('No se pudo obtener tu ubicación. Este navegador no soporta geolocalización o el permiso fue denegado.');
      }
    } finally {
      await loading.dismiss();
      this.isLoading = false;
    }
  }

  reverseGeocode(position: {lat: number, lng: number}) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&key=${this.apiKey}`;

    this.http.get(url).subscribe((response: any) => {
      if (response.status === 'OK' && response.results && response.results.length > 0) {
        this.currentAddress = response.results[0].formatted_address;
      } else {
        this.currentAddress = 'Dirección no encontrada';
      }
    }, error => {
      console.error('Error en geocodificación inversa:', error);
      this.currentAddress = 'Error al obtener la dirección';
    });
  }

  confirmLocation() {
    if (!this.currentPosition) {
      alert('No se ha seleccionado una ubicación válida');
      return;
    }

    const result = {
      position: this.currentPosition,
      address: this.currentAddress
    };
    this.modalController.dismiss(result, 'confirm');
  }

  dismiss() {
    this.modalController.dismiss(null, 'cancel');
  }
}
