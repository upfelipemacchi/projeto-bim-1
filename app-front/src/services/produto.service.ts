import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from "src/models/produto.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) { }

    URL = "http://localhost:3001/produtos";

    listarProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.URL);
    }

    buscarProdutoPorId(id : number) : Observable<Produto> {
        return this.http.get<Produto>(`${this.URL}/${id}`)
    }

    incluirProduto(produto : Produto) : Observable<any> {
        return this.http.post(this.URL, produto);
    }

    atualizarProduto(produto : Produto, id : number) : Observable<any> {
        return this.http.put(`${this.URL}/${id}`, produto);
    }

    excluirProduto(id : number) : Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

}
