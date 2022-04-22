import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "src/models/usuario.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    URL = "http://localhost:3001/usuarios";

    listarUsuarios() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.URL);
    }

    buscarUsuarioPorId(id : number) : Observable<Usuario> {
        return this.http.get<Usuario>(`${this.URL}/${id}`)
    }

    incluirUsuario(usuario : Usuario) : Observable<any> {
        return this.http.post(this.URL, usuario);
    }

    atualizarUsuario(usuario : Usuario, id : number) : Observable<any> {
        return this.http.put(`${this.URL}/${id}`, usuario);
    }

    excluirUsuario(id : number) : Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

}
