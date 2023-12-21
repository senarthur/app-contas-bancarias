import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { TelaListagemComponent } from './pages/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaListagemComponent,
    TelaCadastroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
