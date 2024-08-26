import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cre-con',
  templateUrl: './cre-con.page.html',
  styleUrls: ['./cre-con.page.scss'],
})
export class CreConPage implements OnInit {
  onVideoEnded() {
    const videoElement = document.getElementById('myAnimation') as HTMLVideoElement;
    // Hacer que el último frame se quede visible
    videoElement.setAttribute('controls', 'false'); // Por si quieres ocultar los controles al finalizar
  }
  constructor() { }

  ngOnInit() {
  }

}
