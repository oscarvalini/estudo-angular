import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicionarioCadastroComponent } from './dicionario-cadastro/dicionario-cadastro.component';
import { DicionarioConsultaComponent } from './dicionario-consulta/dicionario-consulta.component';
import { DicionarioTextoComponent } from './dicionario-texto/dicionario-texto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dicionarios',
    pathMatch: 'full'
  },
  { path: 'dicionarios', component: DicionarioCadastroComponent },
  { path: 'dicionarios/:id', component: DicionarioConsultaComponent },
  { path: '**', redirectTo: 'dicionarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
