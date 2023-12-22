import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { TelaListagemComponent } from './pages/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: TelaInicialComponent
  },
  {
    path: 'listagem',
    component: TelaListagemComponent
  },
  {
    path: 'cadastro/:id',
    component: TelaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
