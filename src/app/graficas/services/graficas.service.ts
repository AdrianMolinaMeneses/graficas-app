import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuariosRedesSocilaes() {
    return this.http.get(`${environment.URL_HOST}/grafica`);
  }
}
