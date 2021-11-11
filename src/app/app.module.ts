import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NovoPacoteComponent } from './novo-pacote/novo-pacote.component';
import { ListaPacotesComponent } from './lista-pacotes/lista-pacotes.component';
import { DetalhesPacoteComponent } from './detalhes-pacote/detalhes-pacote.component';
import { AprovacaoPacoteComponent } from './aprovacao-pacote/aprovacao-pacote.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NovoPacoteComponent,
    ListaPacotesComponent,
    DetalhesPacoteComponent,
    AprovacaoPacoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
