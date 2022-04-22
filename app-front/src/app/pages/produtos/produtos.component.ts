import { Component, OnInit } from '@angular/core';
import { Produto } from "src/models/produto.model";
import { ProdutoService } from "src/services/produto.service";

@Component({
    selector: 'page-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.produtoService.listarProdutos().subscribe(produtos => {
            this.produtos = produtos;
        });
    }

}
