import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  private apiUrl = 'https://login.blip-backend.com';
  constructor(private http: HttpClient) {}
}
