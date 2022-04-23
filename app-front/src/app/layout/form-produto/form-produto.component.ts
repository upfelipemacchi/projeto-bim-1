import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../../../models/produto.model";

@Component({
    selector: 'form-produto',
    templateUrl: './form-produto.component.html',
    styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

    @Input() produto: Produto = new Produto();

    constructor() { }

    ngOnInit(): void { }

}
