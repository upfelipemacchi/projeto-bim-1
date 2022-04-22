import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './components/btn/btn.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrincipaisProdutosComponent } from './layout/principais-produtos/principais-produtos.component';
import { PrincipaisProdutosCardComponent } from './layout/principais-produtos-card/principais-produtos-card.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProdutosComponent } from './pages/admin/admin-produtos/admin-produtos.component';
import { AdminUsuariosComponent } from './pages/admin/admin-usuarios/admin-usuarios.component';
import { AdicionarProdutoComponent } from './pages/admin/admin-produtos/adicionar-produto/adicionar-produto.component';
import { EditarProdutoComponent } from './pages/admin/admin-produtos/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './pages/admin/admin-produtos/excluir-produto/excluir-produto.component';
import { ModalComponent } from './layout/modal/modal.component';
import { BtnModalComponent } from './components/btn-modal/btn-modal.component';
import { FormProdutoComponent } from './layout/form-produto/form-produto.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      BtnComponent,
      FooterComponent,
      PrincipaisProdutosComponent,
      PrincipaisProdutosCardComponent,
      ProdutosComponent,
      SobreComponent,
      AdminComponent,
      AdminProdutosComponent,
      AdminUsuariosComponent,
      AdicionarProdutoComponent,
      EditarProdutoComponent,
      ExcluirProdutoComponent,
      ModalComponent,
      BtnModalComponent,
      FormProdutoComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
