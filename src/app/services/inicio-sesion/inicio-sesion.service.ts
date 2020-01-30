import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InicioSesion } from 'src/app/dto/inicio-sesion';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private http: HttpClient) { }

  iniciarSesion(param: any): Observable<InicioSesion> {
    param.token = 'DASFL497SDHFHF437EW77346HFDSIF4YI3Y928HEWFUHW4I';
    console.log('Datos de formulario: ', param);

    return this.http.post<InicioSesion>('http://my-json-server.typicode.com/brayan1119/curso-angular/login', param);
  }
}
