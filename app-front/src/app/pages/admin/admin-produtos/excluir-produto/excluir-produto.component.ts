import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../../../../services/produto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Produto} from "../../../../../models/produto.model";

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

    produto: Produto = new Produto();

    constructor(private produtoService: ProdutoService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        const str = this.route.snapshot.paramMap.get('id')
        this.produtoService.buscarProdutoPorId(Number(str)).subscribe(produto => {
            this.produto = produto;
        });
    }

    salvar() {
        this.produtoService.excluirProduto(this.produto.id).subscribe(() => {
            this.router.navigate(['/admin/produtos']);
        });
    }

}
