import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "src/models/usuario.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    URL = "http://localhost:3000/usuarios";

    listarUsuarios() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.URL + "/listar");
    }

    buscarUsuarioPorId(id : string) : Observable<Usuario> {
        return this.http.get<Usuario>(`${this.URL}/buscar/${id}`)
    }

    incluirUsuario(usuario : Usuario) : Observable<any> {
        return this.http.post(this.URL + "/cadastrar", usuario);
    }

    atualizarUsuario(usuario : Usuario, id : string) : Observable<any> {
        return this.http.put(`${this.URL}/atualizar/${id}`, usuario);
    }

    excluirUsuario(id : string) : Observable<any> {
        return this.http.delete(`${this.URL}/deletar/${id}`);
    }

}
