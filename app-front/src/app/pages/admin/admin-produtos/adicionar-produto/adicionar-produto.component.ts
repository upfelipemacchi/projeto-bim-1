import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../../models/produto.model';
import { ProdutoService } from '../../../../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

    produto: Produto = new Produto();

    constructor(private produtoService: ProdutoService,
                private router: Router) { }

    ngOnInit(): void { }

    salvar() {
        this.produtoService.incluirProduto(this.produto).subscribe(() => {
            this.router.navigate(['/admin/produtos']);
        });
    }

}
