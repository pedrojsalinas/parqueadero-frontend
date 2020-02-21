import { Injectable } from '@angular/core';

// Modelo
import { Global } from './global';
import { Espacios } from '../../entities/Espacios';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  public url: string;
  public espaciosSeleccionada: Espacios;
  public espacios: Espacios[];

  constructor(private http: HttpClient) {
    this.espaciosSeleccionada = new Espacios();
    this.url = Global.url;

  }

  registrarEspacio(espacios: Espacios): Observable<any> {
    const params = JSON.stringify(espacios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'espacios', params, { headers });
  }

  listarEspacios(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'espacios', { headers });
  }

  actualizarEspacio(espacios: Espacios): Observable<any> {
    const params = JSON.stringify(espacios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `espacios/${espacios.id}`, params, { headers });
  }

  eliminarEspacio(idEspacio: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `espacios/${idEspacio}`, { headers });
  }

}





