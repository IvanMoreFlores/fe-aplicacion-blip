import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = 'http://localhost:3000/send-sms'; // URL de tu backend


  constructor(private http: HttpClient) {
   }

   sendSms(to: string, body: string) {
    return this.http.post(this.apiUrl, { to, body });
  }
}
