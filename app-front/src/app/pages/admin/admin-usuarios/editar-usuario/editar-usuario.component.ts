import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../../models/usuario.model";
import {ProdutoService} from "../../../../../services/produto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../../../../services/usuario.service";

@Component({
    selector: 'app-editar-usuario',
    templateUrl: './editar-usuario.component.html',
    styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

    usuario: Usuario = new Usuario();

    constructor(private usuarioService: UsuarioService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        const str = this.route.snapshot.paramMap.get('id')
        this.usuarioService.buscarUsuarioPorId(`${str}`).subscribe(usuario => {
            this.usuario = usuario;
        });
    }

    salvar() {
        this.usuario.usuario = this.usuario.usuario.toLowerCase().replace(/[\W_]/g, '');

        this.usuarioService.atualizarUsuario(this.usuario, `${this.usuario.id}`).subscribe(() => {
            this.router.navigate(['/admin/usuarios']);
        });
    }

}
