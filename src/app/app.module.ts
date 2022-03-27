import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DicionarioCadastroComponent } from './dicionario-cadastro/dicionario-cadastro.component';
import { DicionarioConsultaComponent } from './dicionario-consulta/dicionario-consulta.component';
import { DicionarioTextoComponent } from './dicionario-texto/dicionario-texto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DicionarioCadastroComponent,
    DicionarioConsultaComponent,
    DicionarioTextoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
