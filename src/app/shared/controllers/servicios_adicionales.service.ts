import { Injectable } from '@angular/core';

// Modelo
import { Global } from './global';
import { Servicios_adicionales } from '../../entities/Servicios_adicionales';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Servicios_AdicionalesService {
  public url: string;
  public servicioSeleccionada: Servicios_adicionales;
  public servicios: Servicios_adicionales[];

  constructor(private http: HttpClient) {
    this.servicioSeleccionada = new Servicios_adicionales();
    this.url = Global.url;

  }

  registrarServicio_Adicional(servicios: Servicios_adicionales): Observable<any> {
    const params = JSON.stringify(servicios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'servicios', params, { headers });
  }

  listarServicio_Adicionals(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'servicios', { headers });
  }

  actualizarServicio_Adicional(servicios: Servicios_adicionales): Observable<any> {
    const params = JSON.stringify(servicios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `servicios/${servicios.id}`, params, { headers });
  }

  eliminarServicio_Adicional(idServicio: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `servicios/${idServicio}`, { headers });
  }

}





