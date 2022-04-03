import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicionarioComponent } from './dicionario/dicionario.component';
import { DicionarioConsultaComponent } from './dicionario-consulta/dicionario-consulta.component';
import { DicionarioTextoComponent } from './dicionario-texto/dicionario-texto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dicionarios',
    pathMatch: 'full'
  },
  { path: 'dicionarios', component: DicionarioComponent },
  { path: 'dicionarios/:id', component: DicionarioConsultaComponent },
  { path: 'dicionarios/:id/palavras', component: DicionarioTextoComponent},
  { path: '**', redirectTo: 'dicionarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
