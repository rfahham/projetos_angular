// Angular

import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação pra ser executada
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'; //usado para fazer as requisições Ajax
import { FormsModule } from '@angular/forms'; // Utilizado para formulários

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule 

  ],
  providers: [], // Serviços disponíveis - Escopo global da aplicação
  bootstrap: [AppComponent] // Componente instanciado na aplicação
})
export class AppModule { }
