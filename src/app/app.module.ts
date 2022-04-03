import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DicionarioComponent } from './dicionario/dicionario.component';
import { DicionarioConsultaComponent } from './dicionario-consulta/dicionario-consulta.component';
import { DicionarioTextoComponent } from './dicionario-texto/dicionario-texto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { DicionarioTextoCadastroComponent } from './dicionario-texto/dicionario-texto-cadastro/dicionario-texto-cadastro.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './dicionario.dataservice';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DicionarioFormComponent } from './dicionario/dicionario-form/dicionario-form.component';
import { ModalPadraoComponent } from './shared/modal-padrao/modal-padrao.component';
import { BotaoPadraoComponent } from './shared/botao-padrao/botao-padrao.component';
import { TrimInputDirective } from './shared/directives/trim-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DicionarioComponent,
    DicionarioConsultaComponent,
    DicionarioTextoComponent,
    DicionarioTextoCadastroComponent,
    DicionarioFormComponent,
    ModalPadraoComponent,
    BotaoPadraoComponent,
    TrimInputDirective
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
    ColorPickerModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
