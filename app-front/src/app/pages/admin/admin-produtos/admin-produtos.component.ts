import { Component, OnInit } from '@angular/core';
import { Produto } from "../../../../models/produto.model";
import { ProdutoService } from "../../../../services/produto.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css']
})
export class AdminProdutosComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(private produtoService: ProdutoService,
                private router: Router) { }

    ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.produtoService.listarProdutos().subscribe(produtos => {
            this.produtos = produtos;
        });
    }

}
