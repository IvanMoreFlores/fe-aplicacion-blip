import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenstreetService {
  private apiURL = 'https://nominatim.openstreetmap.org/search?format=json&q=';

  constructor(
    private http: HttpClient
  ) { }

  search(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}${query}`);
  }
}
