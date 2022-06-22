import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../../../../services/usuario.service";
import {Usuario} from "../../../../../models/usuario.model";

@Component({
  selector: 'app-excluir-usuario',
  templateUrl: './excluir-usuario.component.html',
  styleUrls: ['./excluir-usuario.component.css']
})
export class ExcluirUsuarioComponent implements OnInit {

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
        this.usuarioService.excluirUsuario(`${this.usuario.id}`).subscribe(() => {
            this.router.navigate(['/admin/usuarios']);
        });
    }

}
