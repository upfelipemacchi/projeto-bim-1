import { Component, OnInit } from '@angular/core';
import {Produto} from "../../../../../models/produto.model";
import {ProdutoService} from "../../../../../services/produto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-editar-produto',
    templateUrl: './editar-produto.component.html',
    styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

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
        this.produtoService.atualizarProduto(this.produto, this.produto.id).subscribe(() => {
            this.router.navigate(['/admin/produtos']);
        });
    }

}
