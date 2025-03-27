import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
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
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'ing-cor',
    loadChildren: () => import('./pages/ing-cor/ing-cor.module').then( m => m.IngCorPageModule)
  },
  {
    path: 'recu-cuen',
    loadChildren: () => import('./pages/recu-cuen/recu-cuen.module').then( m => m.RecuCuenPageModule)
  },
  {
    path: 'log-con',
    loadChildren: () => import('./pages/log-con/log-con.module').then( m => m.LogConPageModule)
  },
  {
    path: 'log-bin',
    loadChildren: () => import('./pages/log-bin/log-bin.module').then( m => m.LogBinPageModule)
  },
  {
    path: 'olv-con',
    loadChildren: () => import('./pages/olv-con/olv-con.module').then( m => m.OlvConPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'datos-registro',
    loadChildren: () => import('./pages/datos-registro/datos-registro.module').then( m => m.DatosRegistroPageModule)
  },
  {
    path: 'datos-ingresar',
    loadChildren: () => import('./pages/datos-ingresar/datos-ingresar.module').then( m => m.DatosIngresarPageModule)
  },
  {
    path: 'datos-verificacion',
    loadChildren: () => import('./pages/datos-verificacion/datos-verificacion.module').then( m => m.DatosVerificacionPageModule)
  },
  {
    path: 'datos-numero',
    loadChildren: () => import('./pages/datos-numero/datos-numero.module').then( m => m.DatosNumeroPageModule)
  },
  {
    path: 'datos-creacion-contra',
    loadChildren: () => import('./pages/datos-creacion-contra/datos-creacion-contra.module').then( m => m.DatosCreacionContraPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'cre-con',
    loadChildren: () => import('./pages/cre-con/cre-con.module').then( m => m.CreConPageModule)
  },
  {
    path: 'tap-home',
    loadChildren: () => import('./pages/tap-home/tap-home.module').then( m => m.TapHomePageModule)
  },
  {
    path: 'tab-home',
    loadChildren: () => import('./pages/tab-home/tab-home.module').then( m => m.TabHomePageModule)
  },
  {
    path: 'loader-comp',
    loadChildren: () => import('./pages/loader-comp/loader-comp.module').then( m => m.LoaderCompPageModule)
  },
  {
    path: 'cre-anu',
    loadChildren: () => import('./pages/cre-anu/cre-anu.module').then( m => m.CreAnuPageModule)
  },
  {
    path: 'validacion-idn',
    loadChildren: () => import('./pages/validacion-idn/validacion-idn.module').then( m => m.ValidacionIdnPageModule)
  },
  {
    path: 'cor-controlv',
    loadChildren: () => import('./pages/cor-controlv/cor-controlv.module').then( m => m.CorControlvPageModule)
  },
  {
    path: 'loader-olvcon',
    loadChildren: () => import('./pages/loader-olvcon/loader-olvcon.module').then( m => m.LoaderOlvconPageModule)
  },
  {
    path: 'succes-cor',
    loadChildren: () => import('./pages/succes-cor/succes-cor.module').then( m => m.SuccesCorPageModule)
  },
  {
    path: 'contra-cor',
    loadChildren: () => import('./pages/contra-cor/contra-cor.module').then( m => m.ContraCorPageModule)
  },
  {
    path: 'succes-restcon',
    loadChildren: () => import('./pages/succes-restcon/succes-restcon.module').then( m => m.SuccesRestconPageModule)
  },
  {
    path: 'cor-registro',
    loadChildren: () => import('./pages/cor-registro/cor-registro.module').then( m => m.CorRegistroPageModule)
  },
{
  path:'app-descripcion-espacio',
  loadChildren: () => import('./pages/crear-anuncio-descripcion-espacio/descripcion-espacio.module').then( m => m.DescripcionEspacioModule)
}



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
