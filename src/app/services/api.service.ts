import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://blip-backend.com';

  constructor(
    private http: HttpClient
  ) {

  }

  getTokenTmp(value: string, type: string) {

    let tmp_url = '';
    let token = '';

    switch (type) {
      case 'email':
        tmp_url = '?email=' + value;
      case 'phone':
        tmp_url = '?phone=' + value;
      case 'token':
        token = `Bearer ${value}`;
    }

    const headers = new HttpHeaders({
      Authorization: token,
    });

    return this.http.get(this.apiUrl + '/user/session/token/temp' + tmp_url, { headers });
  }

  getTokenTmpRegister(token: string) {

    const headers = new HttpHeaders({
      Authorization: token,
    });

    return this.http.get(this.apiUrl + '/user/session/token/temp/register', { headers });
  }

  getUserToken(token: string){
    const headers = new HttpHeaders({
      Authorization: token,
    });

    return this.http.get(this.apiUrl + '/user/session/token', { headers });
  }

  getTokenRefresh(token: string, refresh: string){

    return this.http.get(this.apiUrl + '/user/session/token/' + token + '/refresh/' + refresh);
  }

  

}
