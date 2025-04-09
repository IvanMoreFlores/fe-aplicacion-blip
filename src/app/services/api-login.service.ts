import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  private apiUrl = 'https://login.blip-backend.com';
  //private apiUrl = 'http://localhost:3001';
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

  setNewPassword(token: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/host/password/change`, data, {
      headers,
    });
  }

  sendEmail(
    token: string,
    to: string,
    subject: string,
    text: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    const data = {
      to,
      subject,
      text,
    };
    return this.http.post(`${this.apiUrl}/mail/send`, data, { headers });
  }

  getTokenTempToRegister(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.apiUrl}/host/session/token/temp/register`, {
      headers,
    });
  }

  registerNewUser(token: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/host/register`, data, { headers });
  }
}
