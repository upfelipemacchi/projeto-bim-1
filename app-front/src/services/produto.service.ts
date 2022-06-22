import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from "src/models/produto.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) { }

    URL = "http://localhost:3000/produtos";

    listarProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.URL + "/listar");
    }

    buscarProdutoPorId(id : string) : Observable<Produto> {
        return this.http.get<Produto>(`${this.URL}/buscar/${id}`)
    }

    incluirProduto(produto : Produto) : Observable<any> {
        return this.http.post(this.URL + "/cadastrar", produto);
    }

    atualizarProduto(produto : Produto, id : string) : Observable<any> {
        return this.http.put(`${this.URL}/atualizar/${id}`, produto);
    }

    excluirProduto(id : string) : Observable<any> {
        return this.http.delete(`${this.URL}/deletar/${id}`);
    }

}
