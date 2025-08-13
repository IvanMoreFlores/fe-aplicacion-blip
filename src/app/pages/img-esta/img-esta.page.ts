import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-img-esta',
  templateUrl: './img-esta.page.html',
  styleUrls: ['./img-esta.page.scss'],
})
export class ImgEstaPage implements OnInit {
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  servicio: string[] = [];
  gar_largo: string = '';
  gar_ancho: string = '';
  gar_alto: string = '';
  uga_direcc: string = '';
  uga_lat: string = '';
  uga_long: string = '';
  dis_id: number = 0;
  tve_id: any = [];
  descripcion: string = '';
  mainFiles: File[] = [];
  extraFiles: File[] = [];
  allPreviews: string[] = [];
  showAddImageModal: boolean = false;
  permissionStatus: any = null;
  isLoadingPermissions: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) {
    this.setValues();
  }

  ngOnInit() {
    this.checkCameraPermissions();
    // También verificar permisos específicos de Android si es necesario
    this.checkAndroidPermissions();
  }

  ionViewWillEnter() {
    // Verificar permisos cada vez que la vista se active
    this.checkCameraPermissions();
  }

  ionViewDidEnter() {
    // Verificar permisos después de que la vista esté completamente cargada
    this.refreshPermissionStatus();
  }

  async refreshPermissionStatus() {
    try {
      const currentStatus = await Camera.checkPermissions();
      this.permissionStatus = currentStatus;
      console.log('Estado de permisos refrescado:', currentStatus);
    } catch (error) {
      console.error('Error al refrescar estado de permisos:', error);
    }
  }

  async checkCameraPermissions() {
    try {
      this.isLoadingPermissions = true;
      const permissionStatus = await Camera.checkPermissions();
      this.permissionStatus = permissionStatus;
      console.log('Estado de permisos actual:', permissionStatus);

      const savedPermissions = await this.storage.getItem('cameraPermissions');

      // Si no tenemos permisos guardados o los permisos han cambiado, actualizar
      if (
        !savedPermissions ||
        savedPermissions.camera !== (permissionStatus.camera === 'granted') ||
        savedPermissions.photos !== (permissionStatus.photos === 'granted')
      ) {
        await this.storage.setItem('cameraPermissions', {
          camera: permissionStatus.camera === 'granted',
          photos: permissionStatus.photos === 'granted',
        });
      }

      // Solo solicitar permisos si realmente no los tenemos
      if (
        permissionStatus.camera !== 'granted' ||
        permissionStatus.photos !== 'granted'
      ) {
        console.log('Solicitando permisos de cámara y galería...');
        await this.requestCameraAndGalleryPermissions();
      } else {
        console.log('Permisos ya están concedidos');
      }
    } catch (error) {
      console.error('Error al verificar permisos de cámara:', error);
    } finally {
      this.isLoadingPermissions = false;
    }
  }

  async checkAndroidPermissions() {
    try {
      // Verificar si estamos en Android
      if (this.isAndroid()) {
        console.log('Verificando permisos específicos de Android...');

        // En Android, los permisos se manejan de manera diferente
        // Capacitor se encarga de solicitar los permisos automáticamente
        const permissionStatus = await Camera.checkPermissions();
        console.log('Estado de permisos en Android:', permissionStatus);

        return permissionStatus;
      }
      return null;
    } catch (error) {
      console.error('Error al verificar permisos de Android:', error);
      return null;
    }
  }

  isAndroid(): boolean {
    return /android/i.test(navigator.userAgent);
  }

  async requestCameraAndGalleryPermissions() {
    try {
      console.log('Solicitando permisos...');

      // Solicitar permisos de cámara
      const cameraRequestResult = await Camera.requestPermissions();
      console.log('Resultado de permisos de cámara:', cameraRequestResult);

      // Guardar el estado de los permisos en storage
      await this.storage.setItem('cameraPermissions', {
        camera: cameraRequestResult.camera === 'granted',
        photos: cameraRequestResult.photos === 'granted',
      });

      if (
        cameraRequestResult.camera !== 'granted' ||
        cameraRequestResult.photos !== 'granted'
      ) {
        console.log('Algunos permisos fueron denegados');
        await this.showPermissionAlert();
      }
    } catch (error) {
      console.error('Error al solicitar permisos de cámara y galería:', error);
    }
  }

  async showPermissionAlert() {
    const alert = await this.alertController.create({
      header: 'Permisos requeridos',
      message:
        'Esta aplicación necesita acceso a la cámara y galería para funcionar correctamente. Por favor, ve a Configuración > Privacidad y Seguridad > Cámara y Fotos y habilita el acceso para esta aplicación.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ir a Configuración',
          handler: () => {
            // En iOS, abrir configuración de la app
            if (window.navigator && (window.navigator as any).openAppSettings) {
              (window.navigator as any).openAppSettings();
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async selectCamera() {
    console.log('=== SELECCIONÓ CÁMARA ===');
    await this.captureImage(CameraSource.Camera);
    this.dismissOpenModal();
  }

  async selectGallery() {
    console.log('=== SELECCIONÓ GALERÍA ===');
    await this.captureImage(CameraSource.Photos);
    this.dismissOpenModal();
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  async dismissOpenModal() {
    this.showAddImageModal = false;
  }

  async captureImage(source: CameraSource) {
    try {
      console.log('Intentando capturar imagen desde:', source);

      // Verificar permisos antes de intentar capturar
      const permissionStatus = await Camera.checkPermissions();

      if (
        source === CameraSource.Camera &&
        permissionStatus.camera !== 'granted'
      ) {
        console.log('Permisos de cámara no concedidos, solicitando...');
        const requestResult = await Camera.requestPermissions();
        if (requestResult.camera !== 'granted') {
          console.log('Permisos de cámara denegados después de solicitar');
          await this.showPermissionAlert();
          return;
        }
      } else if (
        source === CameraSource.Photos &&
        permissionStatus.photos !== 'granted'
      ) {
        console.log('Permisos de galería no concedidos, solicitando...');
        const requestResult = await Camera.requestPermissions();
        if (requestResult.photos !== 'granted') {
          console.log('Permisos de galería denegados después de solicitar');
          await this.showPermissionAlert();
          return;
        }
      }

      console.log('Permisos verificados, procediendo a capturar...');

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source,
      });

      if (image.webPath) {
        console.log('Imagen capturada exitosamente:', image.webPath);
        this.addImageFromPath(image.webPath);
      } else {
        console.log('No se obtuvo webPath de la imagen');
      }
    } catch (error: any) {
      console.error('Error al obtener la imagen:', error);

      // Verificar si el error es por cancelación del usuario o permisos
      if (
        error.message &&
        (error.message.includes('User cancelled') ||
          error.message.includes('User canceled') ||
          error.message.includes('cancelled') ||
          error.message.includes('canceled') ||
          error.message.includes('User did not take photo') ||
          error.message.includes('User did not select photo') ||
          error.message.includes('User did not grant permission') ||
          error.message.includes('permission') ||
          error.message.includes('Permission') ||
          error.message.includes('denied') ||
          error.message.includes('Denied') ||
          error.message.includes('not authorized') ||
          error.message.includes('Not authorized') ||
          error.message.includes('access denied') ||
          error.message.includes('Access denied'))
      ) {
        // El usuario canceló la acción o hay problemas de permisos, no mostrar error
        console.log(
          'Usuario canceló la selección de imagen o hay problemas de permisos:',
          error.message
        );
        return;
      }

      // Solo mostrar error si es un error técnico real (no de permisos o cancelación)
      console.log('Error técnico real detectado:', error.message);
      await this.showErrorAlert(
        'Error al capturar la imagen. Por favor, intenta de nuevo.'
      );
    }
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async checkCurrentPermissionStatus() {
    try {
      const permissionStatus = await Camera.checkPermissions();
      console.log('Estado actual de permisos:', permissionStatus);

      const savedPermissions = await this.storage.getItem('cameraPermissions');
      console.log('Permisos guardados en storage:', savedPermissions);

      return permissionStatus;
    } catch (error) {
      console.error('Error al verificar estado de permisos:', error);
      return null;
    }
  }

  async onAddImageClick() {
    try {
      // Verificar permisos antes de mostrar el modal
      const permissionStatus = await this.checkCurrentPermissionStatus();

      if (permissionStatus) {
        if (
          permissionStatus.camera === 'granted' &&
          permissionStatus.photos === 'granted'
        ) {
          // Permisos concedidos, mostrar modal normal
          console.log('Permisos concedidos, mostrando modal');
          this.showAddImageModal = true;
        } else if (
          permissionStatus.camera === 'denied' ||
          permissionStatus.photos === 'denied'
        ) {
          // Permisos denegados, mostrar alerta para ir a configuración
          console.log('Permisos denegados, mostrando alerta');
          await this.showPermissionAlert();
        } else if (
          permissionStatus.camera === 'prompt' ||
          permissionStatus.photos === 'prompt'
        ) {
          // Permisos no determinados, solicitar
          console.log('Solicitando permisos...');
          await this.requestCameraAndGalleryPermissions();
          // Después de solicitar, verificar si se concedieron
          const newStatus = await this.checkCurrentPermissionStatus();
          if (
            newStatus &&
            newStatus.camera === 'granted' &&
            newStatus.photos === 'granted'
          ) {
            console.log(
              'Permisos concedidos después de solicitar, mostrando modal'
            );
            this.showAddImageModal = true;
          }
        } else {
          // Estado desconocido, intentar solicitar permisos
          console.log('Estado de permisos desconocido, solicitando...');
          await this.requestCameraAndGalleryPermissions();
        }
      } else {
        console.log('No se pudo verificar permisos, solicitando...');
        await this.requestCameraAndGalleryPermissions();
      }
    } catch (error) {
      console.error('Error en onAddImageClick:', error);
      // En caso de error, intentar mostrar el modal directamente
      this.showAddImageModal = true;
    }
  }

  addImageFromPath(url: string) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], 'image.jpg', { type: blob.type });
        const reader = new FileReader();
        reader.onload = () => {
          this.allPreviews.push(reader.result as string);
          if (this.mainFiles.length < 3) {
            this.mainFiles.push(file);
          } else {
            this.extraFiles.push(file);
          }
        };
        reader.readAsDataURL(file);
      });
  }

  removeImage(index: number) {
    if (index < 3) {
      this.mainFiles.splice(index, 1);
    } else {
      this.extraFiles.splice(index - 3, 1);
    }
    this.allPreviews.splice(index, 1);
  }

  async sendImages() {
    if (this.mainFiles.length < 3) {
      alert('Debes incluir al menos tres imágenes principales.');
      return;
    }

    const token = await this.storage.getItem('token');
    const arr_dist = await this.storage.getItem('adConfig');
    let name = '';

    arr_dist.districts.forEach((distrito: any) => {
      if (distrito.id_distrito.toString() === this.distrito) {
        name =
          'Cochera ' +
          distrito.nombre_distrito +
          ' ' +
          this.generarCodigoAleatorio();
      }
    });

    console.log('Datos a enviar:');
    console.log('name:', name);
    console.log('tga_id:', this.tga_id);
    console.log('descripcion:', this.descripcion);
    console.log('gar_largo:', this.gar_largo);
    console.log('gar_ancho:', this.gar_ancho);
    console.log('gar_alto:', this.gar_alto);
    console.log('direccion:', this.direccion);
    console.log('latitud:', this.uga_lat);
    console.log('longitud:', this.uga_long);
    console.log('distrito:', this.distrito);
    console.log('servicios:', this.servicio);
    console.log('tve_id:', this.tve_id);
    console.log('Files:', this.mainFiles);

    this.api
      .createAdvertisement(
        token,
        name,
        this.mainFiles,
        this.tga_id,
        this.descripcion,
        this.gar_largo,
        this.gar_ancho,
        this.gar_alto,
        this.direccion,
        this.uga_lat,
        this.uga_long,
        this.distrito,
        this.servicio,
        this.tve_id
      )
      .subscribe(
        async (response: any) => {
          if (response.status === 'success') {
            this.router.navigate(['/cre-anu']);
          } else {
            alert('Hubo un error al crear el anuncio');
          }
        },
        (error: any) => {
          alert('Error al crear el anuncio: ' + error.message);
        }
      );
  }

  generarCodigoAleatorio(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  setValues() {
    this.route.queryParams.subscribe((params) => {
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
      this.uga_direcc = params['uga_direcc'];
      this.uga_lat = params['lat'] || params['uga_lat'];
      this.uga_long = params['lng'] || params['uga_long'];
      this.dis_id = params['dis_id'];
      this.tve_id = params['tve_id'];
      this.descripcion = params['descripcion'];
    });
  }

  return() {
    this.router.navigate(['/configuracion-alquilar'], {
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
        uga_long: this.uga_long,
        dis_id: this.dis_id,
        tve_id: this.tve_id,
      },
    });
  }
}
