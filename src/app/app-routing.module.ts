import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-config',
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
  },
  {
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
    path: 'mensajes-archivados-desarchivar',
    loadChildren: () => import('./pages/mensajes-archivados-desarchivar/mensajes-archivados-desarchivar.module').then( m => m.MensajesArchivadosDesarchivarPageModule)
  },
  {
    path: 'mensajes-destacados',
    loadChildren: () => import('./pages/mensajes-destacados/mensajes-destacados.module').then( m => m.MensajesDestacadosPageModule)
  },
  {
    path: 'mensajes-marcar-destacado',
    loadChildren: () => import('./pages/mensajes-marcar-destacado/mensajes-marcar-destacado.module').then( m => m.MensajesMarcarDestacadoPageModule)
  },
  {
    path: 'mensajes-marcar-leido',
    loadChildren: () => import('./pages/mensajes-marcar-leido/mensajes-marcar-leido.module').then( m => m.MensajesMarcarLeidoPageModule)
  },
  {
    path: 'mensajes-marcar-no-leido',
    loadChildren: () => import('./pages/mensajes-marcar-no-leido/mensajes-marcar-no-leido.module').then( m => m.MensajesMarcarNoLeidoPageModule)
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
    path: 'mostra-esta',
    loadChildren: () => import('./pages/mostra-esta/mostra-esta.module').then( m => m.MostraEstaPageModule)
  },
  {
    path: 'nuevo-anu-pone-alq',
    loadChildren: () => import('./pages/nuevo-anu-pone-alq/nuevo-anu-pone-alq.module').then( m => m.NuevoAnuPoneAlqPageModule)
  },
  {
    path: 'menu-config',
    loadChildren: () => import('./pages/menu-config/menu-config.module').then( m => m.MENUCONFIGPageModule)
  },
  {
    path: 'inf-perso',
    loadChildren: () => import('./pages/inf-perso/inf-perso.module').then( m => m.InfPersoPageModule)
  },
  {
    path: 'calendario-mes',
    loadChildren: () => import('./pages/calendario-mes/calendario-mes.module').then( m => m.CalendarioMesPageModule)
  },
  {
    path: 'finanzas',
    loadChildren: () => import('./pages/finanzas/finanzas.module').then( m => m.FinanzasPageModule)
  },

  {
    path: 'anuncio-caracteristicas',
    loadChildren: () => import('./pages/anuncio-caracteristicas/anuncio-caracteristicas.module').then( m => m.AnuncioCaracteristicasPageModule)
  },

  {
    path: 'presentacion',
    loadChildren: () => import('./pages/presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'presentacion-infracciones-informacion',
    loadChildren: () => import('./pages/presentacion-infracciones-informacion/presentacion-infracciones-informacion.module').then( m => m.PresentacionInfraccionesInformacionPageModule)
  },
  {
    path: 'presentacion-inquilinos-informacion',
    loadChildren: () => import('./pages/presentacion-inquilinos-informacion/presentacion-inquilinos-informacion.module').then( m => m.PresentacionInquilinosInformacionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  } ,
   {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'horario-personalizado',
    loadChildren: () => import('./pages/horario-personalizado/horario-personalizado.module').then( m => m.HorarioPersonalizadoPageModule)
  },
   {
    path: 'panel-anfitrion',
    loadChildren: () => import('./pages/panel-anfitrion/panel-anfitrion.module').then( m => m.PanelAnfitrionPageModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./pages/panel/panel.module').then( m => m.PanelPageModule)
  },
  {
    path: 'inf-perso',
    loadChildren: () => import('./pages/inf-perso/inf-perso.module').then( m => m.InfPersoPageModule)
  },
  {
    path: 'pressed',
    loadChildren: () => import('./pages/pressed/pressed.module').then( m => m.PressedPageModule)
  },
  {
    path: 'pressed-chat',
    loadChildren: () => import('./pages/pressed-chat/pressed-chat.module').then( m => m.PressedChatPageModule)
  },
  {
    path: 'pressed-chat-component',
    loadChildren: () => import('./pages/pressed-chat-component/pressed-chat-component.module').then( m => m.PressedChatComponentPageModule)
  },
  {
    path: 'acre-pro',
    loadChildren: () => import('./pages/acre-pro/acre-pro.module').then( m => m.AcreProPageModule)
  },
  {
    path: 'soporte56',
    loadChildren: () => import('./pages/soporte56/soporte56.module').then( m => m.Soporte56PageModule)
  },
  {
    path: 'ayuda57',
    loadChildren: () => import('./pages/ayuda57/ayuda57.module').then( m => m.Ayuda57PageModule)
  },
  {
    path: 'ini-seg-se',
    loadChildren: () => import('./pages/ini-seg-se/ini-seg-se.module').then( m => m.IniSegSePageModule)
  },
  {
    path: 'notifi',
    loadChildren: () => import('./pages/notifi/notifi.module').then( m => m.NotifiPageModule)
  },
  {
    path: 'cancelacion-politica',
    loadChildren: () => import('./pages/cancelacion-politica/cancelacion-politica.module').then( m => m.CancelacionPoliticaPageModule)
  },
  {
    path: 'lds',
    loadChildren: () => import('./pages/lds/lds.module').then( m => m.LdsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
