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

  // Método para realizar la solicitud
  getValidate(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/validate', { headers }); // Realiza la solicitud GET con los headers
  }

  // Método para realizar la solicitud
  getInformation(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/information', { headers }); // Realiza la solicitud GET con los headers
  }


}
