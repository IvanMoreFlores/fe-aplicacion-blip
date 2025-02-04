import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTokenTemp(token: string, data: any): Observable<any> {
    const { email, phone } = data;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let url: string;
    if (email) {
      url = `${this.apiUrl}/host/session/token/temp?email=${email}`;
    } else {
      url = `${this.apiUrl}/host/session/token/temp?phone=${phone}`;
    }

    return this.http.get(url, { headers });
  }

  getTokenSession(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.apiUrl}/host/session/token`, {
      headers,
    });
  }

  sendSMS(token: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/sms/send`, data, {
      headers,
    });
  }
}
