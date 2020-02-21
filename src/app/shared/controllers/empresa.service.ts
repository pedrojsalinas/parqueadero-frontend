import { Global } from './global';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Modelo


import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from 'src/app/entities/Empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public url: string;
  public empresaSeleccionada: Empresa;
  public empresas: Empresa[];
  onEmpresasChanged: BehaviorSubject<any>;


  constructor(private http: HttpClient) {
    this.empresaSeleccionada = new Empresa();
    this.url = Global.url;
    this.onEmpresasChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.listarEmpresas()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }



  registrarEmpresa(empresas: Empresa): Observable<any> {
    const params = JSON.stringify(empresas);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'empresas', params, { headers });
  }

  listarEmpresas(): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.http.get(this.url + 'empresas', { headers })
    // .subscribe(data => {
    //   console.log(data);
    //   return data
    // })
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'empresas', { headers })
        .subscribe((response: any) => {
          this.empresas = response;
          this.onEmpresasChanged.next(this.empresas);
          resolve(this.empresas);
        }, reject);
    }
    );
  }

  actualizarEmpresa(empresas: Empresa): Observable<any> {
    const params = JSON.stringify(empresas);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `empresas/${empresas.id}`, params, { headers });
  }

  eliminarEmpresa(idEmpresa: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `empresas/${idEmpresa}`, { headers });
  }

}





