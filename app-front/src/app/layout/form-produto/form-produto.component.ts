import { Component, OnInit } from '@angular/core';
import {Produto} from "../../../models/produto.model";
import {ProdutoService} from "../../../services/produto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'form-produto',
    templateUrl: './form-produto.component.html',
    styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

    produto: Produto = new Produto();

    constructor(private produtoService: ProdutoService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        const str = this.route.snapshot.paramMap.get('id') || false;
        if (str) {
            this.produtoService.buscarProdutoPorId(Number(str)).subscribe(produto => {
                this.produto = produto;
            });
        }
    }

    atualizarProduto() {
        this.produtoService.atualizarProduto(this.produto, this.produto.id).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    adicionarProduto() {
        this.produtoService.incluirProduto(this.produto).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    excluirProduto() {
        this.produtoService.excluirProduto(this.produto.id).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

}
