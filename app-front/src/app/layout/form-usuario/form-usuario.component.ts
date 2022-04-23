import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../../models/usuario.model";

@Component({
    selector: 'form-usuario',
    templateUrl: './form-usuario.component.html',
    styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

    @Input() usuario: Usuario = new Usuario();

    constructor() { }

    ngOnInit(): void {
    }

}
