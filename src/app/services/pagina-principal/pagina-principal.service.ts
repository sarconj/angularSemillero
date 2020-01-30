import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../dto/usuario';

@Injectable({
  providedIn: 'root'
})
export class PaginaPrincipalService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://my-json-server.typicode.com/brayan1119/curso-angular/usuarios');
  }

}
