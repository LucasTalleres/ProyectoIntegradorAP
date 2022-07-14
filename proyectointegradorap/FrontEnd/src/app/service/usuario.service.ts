import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiServerUrl=environment.apiBaseUrl;
  
  URL = 'http://localhost:8080/api/usuario'
  
  constructor(private http: HttpClient) { }

  public getUser(): Observable<Usuario>{
    return this.http.get<Usuario>(this.URL + `/1`);
  }

  public updateUsuario(Usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.URL +`/editar`, Usuario);
  }
}
