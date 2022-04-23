import { Component, OnInit } from '@angular/core';
import { ProdutoService } from "../../../../services/produto.service";
import { Router } from "@angular/router";
import { UsuarioService } from "../../../../services/usuario.service";
import { Usuario } from "../../../../models/usuario.model";

@Component({
    selector: 'app-admin-usuarios',
    templateUrl: './admin-usuarios.component.html',
    styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService,
                private router: Router) { }

    ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.usuarioService.listarUsuarios().subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }

}
