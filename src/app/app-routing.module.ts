import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ante-penal',
    pathMatch: 'full'
  },
  {
    path: 'img-mostrar',
    loadChildren: () => import('./pages/img-mostrar/img-mostrar.module').then( m => m.ImgMostrarPageModule)
  },
  {
    path: 'confirmacion-de-identidad',
    loadChildren: () => import('./pages/confirmacion-de-identidad/confirmacion-de-identidad.module').then( m => m.ConfirmacionDeIdentidadPageModule)
  },
  {
    path: 'adj-dt-dni',
    loadChildren: () => import('./pages/adj-dt-dni/adj-dt-dni.module').then( m => m.AdjDtDniPageModule)
  },
  {
    path: 'ante-penal',
    loadChildren: () => import('./pages/ante-penal/ante-penal.module').then( m => m.AntePenalPageModule)
  },
  {
    path: 'eli-pref',
    loadChildren: () => import('./pages/eli-pref/eli-pref.module').then( m => m.EliPrefPageModule)
  },

  {
    path: 'img-esta',
    loadChildren: () => import('./pages/img-esta/img-esta.module').then( m => m.ImgEstaPageModule)
  },

  {
    path: 'terminos-y-condiciones',
    loadChildren: () => import('./pages/terminos-y-condiciones/terminos-y-condiciones.module').then( m => m.TerminosYCondicionesPageModule)
  },
  {
    path: 'terminos-y-condiciones-mas-informacion',
    loadChildren: () => import('./pages/redaccion/redaccion.module').then( m => m.RedaccionPageModule)
  },
  {
    path: 'terminos-y-condiciones-empezar',
    loadChildren: () => import('./pages/terminos-y-condiciones-empezar/terminos-y-condiciones-empezar.module').then( m => m.TerminosYCondicionesEmpezarPageModule)
  },
  {
    path: 'descripcion-del-estacionamiento',
    loadChildren: () => import('./pages/descripcion-del-estacionamiento/descripcion-del-estacionamiento.module').then( m => m.DescripcionDelEstacionamientoPageModule)
  },
  {
    path: 'descripcion-del-espacio',
    loadChildren: () => import('./pages/descripcion-del-espacio/descripcion-del-espacio.module').then( m => m.DescripcionDelEspacioPageModule)
  },
  {
    path: 'descripcion-de-direccion',
    loadChildren: () => import('./pages/descripcion-de-direccion/descripcion-de-direccion.module').then( m => m.DescripcionDeDireccionPageModule)
  },
  {
    path: 'descripcion-de-servicios-adicionales',
    loadChildren: () => import('./pages/descripcion-de-servicios-adicionales/descripcion-de-servicios-adicionales.module').then( m => m.DescripcionDeServiciosAdicionalesPageModule)
  },
  {
    path: 'descripcion-de-medidas-del-espacio',
    loadChildren: () => import('./pages/descripcion-de-medidas-del-espacio/descripcion-de-medidas-del-espacio.module').then( m => m.DescripcionDeMedidasDelEspacioPageModule)
  },
  {
    path: 'descripcion-como-mido-mi-espacio',
    loadChildren: () => import('./pages/descripcion-como-mido-mi-espacio/descripcion-como-mido-mi-espacio.module').then( m => m.DescripcionComoMidoMiEspacioPageModule)
  },
  {
    path: 'descripcion-de-ubicacion',
    loadChildren: () => import('./pages/descripcion-de-ubicacion/descripcion-de-ubicacion.module').then( m => m.DescripcionDeUbicacionPageModule)
  },
  {
    path: 'descripcion-del-mapa',
    loadChildren: () => import('./pages/descripcion-del-mapa/descripcion-del-mapa.module').then( m => m.DescripcionDelMapaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'configuracion-pago',
    loadChildren: () => import('./pages/configuracion-pago/configuracion-pago.module').then( m => m.ConfiguracionPagoPageModule)
  },
  {
    path: 'configuracion-alquilar',
    loadChildren: () => import('./pages/configuracion-alquilar/configuracion-alquilar.module').then( m => m.ConfiguracionAlquilarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'mensajes-chat',
    loadChildren: () => import('./pages/mensajes-chat/mensajes-chat.module').then( m => m.MensajesChatPageModule)
  },
  {
    path: 'mensajes-archivados',
    loadChildren: () => import('./pages/mensajes-archivados/mensajes-archivados.module').then( m => m.MensajesArchivadosPageModule)
  },
  {
    path: 'mensajes-destacados',
    loadChildren: () => import('./pages/mensajes-destacados/mensajes-destacados.module').then( m => m.MensajesDestacadosPageModule)
  },
  {
    path: 'mensajes-atencion',
    loadChildren: () => import('./pages/mensajes-atencion/mensajes-atencion.module').then( m => m.MensajesAtencionPageModule)
  },
  {
    path: 'mensajes-programados',
    loadChildren: () => import('./pages/mensajes-programados/mensajes-programados.module').then( m => m.MensajesProgramadosPageModule)
  },
  {
    path: 'mensajes-respuestas',
    loadChildren: () => import('./pages/mensajes-respuestas/mensajes-respuestas.module').then( m => m.MensajesRespuestasPageModule)
  },
  {
    path: 'home-notificaciones',
    loadChildren: () => import('./pages/home-notificaciones/home-notificaciones.module').then( m => m.HomeNotificacionesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'calendario-semanal',
    loadChildren: () => import('./pages/calendario-semanal/calendario-semanal.module').then( m => m.CalendarioSemanalPageModule)
  },
  {
    path: 'calendario-mes',
    loadChildren: () => import('./pages/calendario-mes/calendario-mes.module').then( m => m.CalendarioMesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
