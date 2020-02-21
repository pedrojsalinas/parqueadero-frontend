import { Injectable } from '@angular/core';

// Modelo
import { Global } from './global';
import { Usuarios } from '../../entities/Usuarios';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url: string;
  public usuariosSeleccionada: Usuarios;
  public usuarios: Usuarios[];

  constructor(private http: HttpClient) {
    this.usuariosSeleccionada = new Usuarios();
    this.url = Global.url;

  }

  registrarUsuario(usuarios: Usuarios): Observable<any> {
    const params = JSON.stringify(usuarios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'usuarios', params, { headers });
  }

  listarUsuarios(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'usuarios', { headers });
  }

  actualizarUsuario(usuarios: Usuarios): Observable<any> {
    const params = JSON.stringify(usuarios);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `usuarios/${usuarios.id}`, params, { headers });
  }

  eliminarUsuario(idUser: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `usuarios/${idUser}`, { headers });
  }

}





