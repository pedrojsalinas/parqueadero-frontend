import { Injectable } from '@angular/core';

// Modelo
import { Global } from './global';
import { Pagos } from '../../entities/Pagos';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagosService {
  public url: string;
  public pagoSeleccionada: Pagos;
  public pagos: Pagos[];

  constructor(private http: HttpClient) {
    this.pagoSeleccionada = new Pagos();
    this.url = Global.url;

  }

  registrarPago(pagos: Pagos): Observable<any> {
    const params = JSON.stringify(pagos);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'pagos', params, { headers });
  }

  listarPagos(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'pagos', { headers });
  }

  actualizarPago(pagos: Pagos): Observable<any> {
    const params = JSON.stringify(pagos);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `pagos/${pagos.id}`, params, { headers });
  }

  eliminarPago(idPago: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `pagos/${idPago}`, { headers });
  }

}





