import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //local onde passamos nossa estrutura de rotas
  { path: 'login', component: LoginComponent },
  // Path é o caminho URL (login) declarado no HTML e o componente a ser carregado (loginComponent)
  { path: '', pathMatch: 'full', redirectTo: 'login' }
  //Path Default caminho URL (login)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
