import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://44.213.46.131:3000'; // URL de tu API

  constructor(
    private http: HttpClient
  ) {

  }

  // Método para validar token de usuario
  getValidate(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/validate', { headers }); // Realiza la solicitud GET con los headers
  }

  // Método para obtener informacion de usuario
  getInformation(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/information', { headers }); // Realiza la solicitud GET con los headers
  }

  // Metodo para registrar usuario
  postRegister(
    usu_numdoc: string, 
    tdo_id: number, 
    usu_apepat: string, 
    usu_nombre: string,
    usu_nrotel: string,
    usu_contra: string,
    tac_id: number,
    tge_id: number,
    usuc_fecnac: string,
    token: string
  ){

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    const body = {
    usu_numdoc: usu_numdoc,
    tdo_id: tdo_id,
    usu_apepat: usu_apepat,
    usu_apemat: " ", 
    usu_nombre: usu_nombre,
    usu_direcc: "pendiente direccion", 
    usu_nrotel: usu_nrotel,
    usu_correo: "pendiente@blip.com",
    usu_contra: usu_contra,
    tac_id: tac_id,
    tge_id: tge_id,
    usuc_fecnac: usuc_fecnac
    };

    return this.http.post(this.apiUrl + '/user/register/host', body, { headers });
   
  }
  


}
