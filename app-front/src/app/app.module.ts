import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
      SobreComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
