import { Injectable } from '@angular/core';

// Modelo
import { Global } from './global';
import { Reservas } from '../../entities/Reservas';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  public url: string;
  public reservaSeleccionada: Reservas;
  public reservas: Reservas[];

  constructor(private http: HttpClient) {
    this.reservaSeleccionada = new Reservas();
    this.url = Global.url;

  }

  registrarReserva(reservas: Reservas): Observable<any> {
    const params = JSON.stringify(reservas);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'reservas', params, { headers });
  }

  listarReservas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'reservas', { headers });
  }

  actualizarReserva(reservas: Reservas): Observable<any> {
    const params = JSON.stringify(reservas);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `reservas/${reservas.id}`, params, { headers });
  }

  eliminarReserva(idReserva: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `reservas/${idReserva}`, { headers });
  }

}





