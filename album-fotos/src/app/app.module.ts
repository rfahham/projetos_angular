import { FotoComponent } from './foto/foto.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto/foto.module';
import { HttpModule} from '@angular/http';
import { PainelModule } from './painel/painel/painel.module';


import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
// import { PainelComponent } from './painel/painel.component';



@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    FotoComponent,
  
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
