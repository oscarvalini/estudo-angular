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
import { ModalAdicionarDicionarioComponent } from './modal-adicionar-dicionario/modal-adicionar-dicionario.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { DicionarioTextoCadastroComponent } from './dicionario-texto/dicionario-texto-cadastro/dicionario-texto-cadastro.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './dicionario.dataservice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DicionarioCadastroComponent,
    DicionarioConsultaComponent,
    DicionarioTextoComponent,
    ModalAdicionarDicionarioComponent,
    DicionarioTextoCadastroComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {delay: 100}),
    EditorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ColorPickerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
