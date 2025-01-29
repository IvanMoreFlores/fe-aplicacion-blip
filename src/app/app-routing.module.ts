import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {

    path: 'splashscreen',
    loadChildren: () =>
      import('./pages/splashscreen/splashscreen.module').then(
        (m) => m.SplashscreenPageModule
      ),
  },
  {
    path: 'walkthrough',
    loadChildren: () =>
      import('./pages/walkthrough/walkthrough.module').then(
        (m) => m.WalkthroughPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'verificacion',
    loadChildren: () =>
      import('./pages/verificacion/verificacion.module').then(
        (m) => m.VerificacionPageModule
      ),
  },
  {
    path: 'termino-y-condiciones',
    loadChildren: () =>
      import('./pages/termino-y-condiciones/termino-y-condiciones.module').then(
        (m) => m.TerminoYCondicionesPageModule
      ),
  },
  {
    path: 'termino-y-condiciones-redaccion',
    loadChildren: () =>
      import(
        './pages/termino-y-condiciones-redaccion/termino-y-condiciones-redaccion.module'
      ).then((m) => m.TerminoYCondicionesRedaccionPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
  //{ path: '', redirectTo: 'splashscreen', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'splashscreen', pathMatch: 'full' },
  

  

  { path: 'pantalla-busqueda',loadChildren: () => import('./pages/pantalla-busqueda/pantalla-busqueda.module').then( m => m.PantallaBusquedaPageModule) },
  {
    path: 'sitios-guardados',
    loadChildren: () =>
      import('./pages/sitios-guardados/sitios-guardados.module').then(
        (m) => m.SitiosGuardadosPageModule
      ),
  },

  
  // { path: '', redirectTo: 'splashscreen', pathMatch: 'full' },
  // { path: '**', redirectTo: 'splashscreen', pathMatch: 'full' },

  {
    path: 'nueva-ubicacion',
    loadChildren: () =>
      import('./pages/nueva-ubicacion/nueva-ubicacion.module').then(
        (m) => m.NuevaUbicacionPageModule
      ),
  },
  {
    path: 'tab-home',
    loadChildren: () =>
      import('./pages/tab-home/tab-home.module').then(
        (m) => m.TabHomePageModule
      ),
  },
  {
    path: 'ubicacion-en-el-mapa',
    loadChildren: () =>
      import('./pages/ubicacion-en-el-mapa/ubicacion-en-el-mapa.module').then(
        (m) => m.UbicacionEnElMapaPageModule
      ),
  },
  {
    path: 'agregar-nueva-ubicacion',
    loadChildren: () =>
      import(
        './pages/agregar-nueva-ubicacion/agregar-nueva-ubicacion.module'
      ).then((m) => m.AgregarNuevaUbicacionPageModule),
  },
  {
    path: 'reservas',
    loadChildren: () =>
      import('./pages/reservas/reservas.module').then(
        (m) => m.ReservasPageModule
      ),
  },
  {
    path: 'notificaciones',
    loadChildren: () =>
      import('./pages/notificaciones/notificaciones.module').then(
        (m) => m.NotificacionesPageModule
      ),
  },
  {
    path: 'favoritos',
    loadChildren: () =>
      import('./pages/favoritos/favoritos.module').then(
        (m) => m.FavoritosPageModule
      ),
  },
  {
    path: 'reservas-loading',
    loadChildren: () =>
      import('./pages/reservas-loading/reservas-loading.module').then(
        (m) => m.ReservasLoadingPageModule
      ),
  },
  {
    path: 'reservas-detalles',
    loadChildren: () =>
      import('./pages/reservas-detalles/reservas-detalles.module').then(
        (m) => m.ReservasDetallesPageModule
      ),
  },
  {
    path: 'reservas-detalles-recibo',
    loadChildren: () =>
      import(
        './pages/reservas-detalles-recibo/reservas-detalles-recibo.module'
      ).then((m) => m.ReservasDetallesReciboPageModule),
  },
  {
    path: 'reservas-reportar',
    loadChildren: () =>
      import('./pages/reservas-reportar/reservas-reportar.module').then(
        (m) => m.ReservasReportarPageModule
      ),
  },

  {
    path: 'blip-home',
    loadChildren: () =>
      import('./pages/blip-home/blip-home.module').then(
        (m) => m.BlipHomePageModule
      ),
  },


  {
    path: 'tab-home',
    loadChildren: () =>
      import('./pages/tab-home/tab-home.module').then(
        (m) => m.TabHomePageModule
      ),
  },



  {
    path: 'agreg-guar',
    loadChildren: () => import('./pages/agreg-guar/agreg-guar.module').then( m => m.AgregGuarPageModule)
  },
  {
    path: 'onboar',
    loadChildren: () => import('./pages/onboar/onboar.module').then( m => m.OnboarPageModule)
  },
  {
    path: 'reservas-proporcionar',
    loadChildren: () => import('./pages/reservas-proporcionar/reservas-proporcionar.module').then( m => m.ReservasProporcionarPageModule)
  },
  {
    path: 'notificaciones-not',
    loadChildren: () => import('./pages/notificaciones-not/notificaciones-not.module').then( m => m.NotificacionesNotPageModule)
  },
  {
    path: 'walktrough1',
    loadChildren: () => import('./pages/walktrough1/walktrough1.module').then( m => m.Walktrough1PageModule)
  },
  {
    path: 'vista-mapa',
    loadChildren: () => import('./pages/vista-mapa/vista-mapa.module').then( m => m.VistaMapaPageModule)
  },
  {
    path: 'explora',
    loadChildren: () => import('./pages/explora/explora.module').then( m => m.ExploraPageModule)
  },
  {
    path: 'agre-nuevo-vehiculo',
    loadChildren: () => import('./pages/agre-nuevo-vehiculo/agre-nuevo-vehiculo.module').then( m => m.AgreNuevoVehiculoPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'info-personal',
    loadChildren: () => import('./pages/info-personal/info-personal.module').then( m => m.InfoPersonalPageModule)
  },
  {
    path: 'inicio-seguridad',
    loadChildren: () => import('./pages/inicio-seguridad/inicio-seguridad.module').then( m => m.InicioSeguridadPageModule)
  },
  {
    path: 'notificaciones-confi',
    loadChildren: () => import('./pages/notificaciones-confi/notificaciones-confi.module').then( m => m.NotificacionesConfiPageModule)
  },
  {
    path: 'ubicacion-confi',
    loadChildren: () => import('./pages/ubicacion-confi/ubicacion-confi.module').then( m => m.UbicacionConfiPageModule)
  },

  
  // { path: '', redirectTo: 'splashscreen', pathMatch: 'full' },
  // { path: '**', redirectTo: 'splashscreen', pathMatch: 'full' },

  {
    path: 'nueva-ubicacion',
    loadChildren: () => import('./pages/nueva-ubicacion/nueva-ubicacion.module').then( m => m.NuevaUbicacionPageModule)
  },
  {
    path: 'ubicacion-en-el-mapa',
    loadChildren: () => import('./pages/ubicacion-en-el-mapa/ubicacion-en-el-mapa.module').then( m => m.UbicacionEnElMapaPageModule)
  },
  {
    path: 'agregar-nueva-ubicacion',
    loadChildren: () => import('./pages/agregar-nueva-ubicacion/agregar-nueva-ubicacion.module').then( m => m.AgregarNuevaUbicacionPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
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
    path: 'datos-ingresar',
    loadChildren: () => import('./pages/datos-ingresar/datos-ingresar.module').then( m => m.DatosIngresarPageModule)
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
    path: 'datos-registro',
    loadChildren: () => import('./pages/datos-registro/datos-registro.module').then( m => m.DatosRegistroPageModule)
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
    path: 'ing-cor',
    loadChildren: () => import('./pages/ing-cor/ing-cor.module').then( m => m.IngCorPageModule)
  },
  {
    path: 'datos-verificacion',
    loadChildren: () => import('./pages/datos-verificacion/datos-verificacion.module').then( m => m.DatosVerificacionPageModule)
  },
  {
    path: 'mensajes-usuario',
    loadChildren: () => import('./pages/mensajes-usuario/mensajes-usuario.module').then( m => m.MensajesUsuarioPageModule)
  },
  {
    path: 'confir-creacion-cuenta',
    loadChildren: () => import('./pages/confir-creacion-cuenta/confir-creacion-cuenta.module').then( m => m.ConfirCreacionCuentaPageModule)
  },
  {
    path: 'reserva-tu-cochera',
    loadChildren: () => import('./pages/reserva-tu-cochera/reserva-tu-cochera.module').then( m => m.ReservaTuCocheraPageModule)
  },
  {
    path: 'reserva-tu-cochera2',
    loadChildren: () => import('./pages/reserva-tu-cochera2/reserva-tu-cochera2.module').then( m => m.ReservaTuCochera2PageModule)
  },
  {
    path: 'cronometro',
    loadChildren: () => import('./pages/cronometro/cronometro.module').then( m => m.CronometroPageModule)
  },

  {
    path: 'pru',
    loadChildren: () => import('./pages/pru/pru.module').then( m => m.PruPageModule)
  },
  {
    path: 'pruass',
    loadChildren: () => import('./pages/pruass/pruass.module').then( m => m.PruassPageModule)
  },  {
    path: 'us-correo',
    loadChildren: () => import('./pages/us-correo/us-correo.module').then( m => m.UsCorreoPageModule)
  },
  {
    path: 'succes-corr',
    loadChildren: () => import('./pages/succes-corr/succes-corr.module').then( m => m.SuccesCorrPageModule)
  },
  {
    path: 'cor-electr',
    loadChildren: () => import('./pages/cor-electr/cor-electr.module').then( m => m.CorElectrPageModule)
  },
  {
    path: 'creac-contra',
    loadChildren: () => import('./pages/creac-contra/creac-contra.module').then( m => m.CreacContraPageModule)
  },
  {
    path: 'succet-home',
    loadChildren: () => import('./pages/succet-home/succet-home.module').then( m => m.SuccetHomePageModule)
  },
  {
    path: 'rest-contra',
    loadChildren: () => import('./pages/rest-contra/rest-contra.module').then( m => m.RestContraPageModule)
  },
  {
    path: 'contra-verf',
    loadChildren: () => import('./pages/contra-verf/contra-verf.module').then( m => m.ContraVerfPageModule)
  },
  {
    path: 'bienvenido-blip',
    loadChildren: () => import('./pages/bienvenido-blip/bienvenido-blip.module').then( m => m.BienvenidoBlipPageModule)
  },
  {
    path: 'time-park',
    loadChildren: () => import('./pages/time-park/time-park.module').then( m => m.TimeParkPageModule)
  },
  {
    path: 'populares',
    loadChildren: () => import('./pages/populares/populares.module').then( m => m.PopularesPageModule)
  },
  {
    path: 'cerca-deti',
    loadChildren: () => import('./pages/cerca-deti/cerca-deti.module').then( m => m.CercaDetiPageModule)
  },
  {
    path: 'todos-parki',
    loadChildren: () => import('./pages/todos-parki/todos-parki.module').then( m => m.TodosParkiPageModule)
  },
  {
    path: 'parke-sit-gurd',
    loadChildren: () => import('./pages/parke-sit-gurd/parke-sit-gurd.module').then( m => m.ParkeSitGurdPageModule)
  },
  {
    path: 'pre-view-est',
    loadChildren: () => import('./pages/pre-view-est/pre-view-est.module').then( m => m.PreViewEstPageModule)
  },
  {
    path: 'view-est',
    loadChildren: () => import('./pages/view-est/view-est.module').then( m => m.ViewEstPageModule)
  },
  {
    path: 'image-viewer',
    loadChildren: () => import('./pages/image-viewer/image-viewer.module').then( m => m.ImageViewerPageModule)
  },
  {
    path: 'succes-report',
    loadChildren: () => import('./pages/succes-report/succes-report.module').then( m => m.SuccesReportPageModule)
  },
  {
    path: 'succes-proporcion',
    loadChildren: () => import('./pages/succes-proporcion/succes-proporcion.module').then( m => m.SuccesProporcionPageModule)
  },
  {
    path: 'recib-tip2',
    loadChildren: () => import('./pages/recib-tip2/recib-tip2.module').then( m => m.RecibTip2PageModule)
  },
  {
    path: 'recib-tip3',
    loadChildren: () => import('./pages/recib-tip3/recib-tip3.module').then( m => m.RecibTip3PageModule)
  },
  {
    path: 'editar-veiculo',
    loadChildren: () => import('./pages/editar-veiculo/editar-veiculo.module').then( m => m.EditarVeiculoPageModule)
  },
  {
    path: 'agregar-vehiculo',
    loadChildren: () => import('./pages/agregar-vehiculo/agregar-vehiculo.module').then( m => m.AgregarVehiculoPageModule)
  },
  {
    path: 'inf-telval',
    loadChildren: () => import('./pages/inf-telval/inf-telval.module').then( m => m.InfTelvalPageModule)
  },
  {
    path: 'inf-telcod',
    loadChildren: () => import('./pages/inf-telcod/inf-telcod.module').then( m => m.InfTelcodPageModule)
  },
  {
    path: 'inf-telsucces',
    loadChildren: () => import('./pages/inf-telsucces/inf-telsucces.module').then( m => m.InfTelsuccesPageModule)
  },
  {
    path: 'inf-corval',
    loadChildren: () => import('./pages/inf-corval/inf-corval.module').then( m => m.InfCorvalPageModule)
  },
  {
    path: 'inf-corcod',
    loadChildren: () => import('./pages/inf-corcod/inf-corcod.module').then( m => m.InfCorcodPageModule)
  },
  {
    path: 'inf-corsucces',
    loadChildren: () => import('./pages/inf-corsucces/inf-corsucces.module').then( m => m.InfCorsuccesPageModule)
  },
  {
    path: 'inf-contcod',
    loadChildren: () => import('./pages/inf-contcod/inf-contcod.module').then( m => m.InfContcodPageModule)
  },
  {
    path: 'inf-contrest',
    loadChildren: () => import('./pages/inf-contrest/inf-contrest.module').then( m => m.InfContrestPageModule)
  },
  {
    path: 'inf-contsuces',
    loadChildren: () => import('./pages/inf-contsuces/inf-contsuces.module').then( m => m.InfContsucesPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'loader-olvco',
    loadChildren: () => import('./pages/loader-olvco/loader-olvco.module').then( m => m.LoaderOlvcoPageModule)
  },




  
  // { path: '', redirectTo: 'spla/*  */shscreen', pathMatch: 'full' },
  // // { path: '**', redirectTo: 'splashscreen', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
