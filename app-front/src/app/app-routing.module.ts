import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {ProdutosComponent} from "./pages/produtos/produtos.component";
import {SobreComponent} from "./pages/sobre/sobre.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminProdutosComponent} from "./pages/admin/admin-produtos/admin-produtos.component";
import {AdicionarProdutoComponent} from "./pages/admin/admin-produtos/adicionar-produto/adicionar-produto.component";
import {AdminUsuariosComponent} from "./pages/admin/admin-usuarios/admin-usuarios.component";
import {EditarProdutoComponent} from "./pages/admin/admin-produtos/editar-produto/editar-produto.component";
import {ExcluirProdutoComponent} from "./pages/admin/admin-produtos/excluir-produto/excluir-produto.component";
import {AdicionarUsuarioComponent} from "./pages/admin/admin-usuarios/adicionar-usuario/adicionar-usuario.component";
import {EditarUsuarioComponent} from "./pages/admin/admin-usuarios/editar-usuario/editar-usuario.component";
import {ExcluirUsuarioComponent} from "./pages/admin/admin-usuarios/excluir-usuario/excluir-usuario.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'produtos',
                component: AdminProdutosComponent,
                children: [
                    {
                        path: 'adicionar',
                        component: AdicionarProdutoComponent,
                    },
                    {
                        path: 'editar/:id',
                        component: EditarProdutoComponent,
                    },
                    {
                        path: 'excluir/:id',
                        component: ExcluirProdutoComponent,
                    },
                ]
            },
            {
                path: 'usuarios',
                component: AdminUsuariosComponent,
                children: [
                    {
                        path: 'adicionar',
                        component: AdicionarUsuarioComponent,
                    },
                    {
                        path: 'editar/:id',
                        component: EditarUsuarioComponent,
                    },
                    {
                        path: 'excluir/:id',
                        component: ExcluirUsuarioComponent,
                    },
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
