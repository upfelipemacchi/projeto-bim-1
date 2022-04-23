import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../../models/usuario.model";
import {UsuarioService} from "../../../../../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent implements OnInit {

    usuario: Usuario = new Usuario();

    constructor(private usuarioService: UsuarioService,
                private router: Router) { }

    ngOnInit(): void {
    }

    salvar() {
        this.usuario.usuario = this.usuario.usuario.toLowerCase().replace(/[\W_]/g, '');

        this.usuarioService.incluirUsuario(this.usuario).subscribe(() => {
            this.router.navigate(['/admin/usuarios']);
        });
    }

}
