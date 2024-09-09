import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = 'http://44.213.46.131:3000'; // URL de tu backend

  constructor(private http: HttpClient) {
   }

   sendSms(to: string, message: string, token: string): Observable<any> {

    console.log(token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

      // Configurar el cuerpo de la solicitud con los datos
    const body = {
      to: to, // Primer campo de datos
      message: message, // Segundo campo de datos
    };

    return this.http.post(this.apiUrl + '/user/send-sms', body, { headers });
  }
}
