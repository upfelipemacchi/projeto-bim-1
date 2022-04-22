import { Component, OnInit } from '@angular/core';
import { Produto } from "../../../../models/produto.model";
import { ProdutoService } from "../../../../services/produto.service";

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css']
})
export class AdminProdutosComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.produtoService.listarProdutos().subscribe(produtos => {
            this.produtos = produtos;
        });
    }

}
