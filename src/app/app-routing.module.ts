import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NovoPacoteComponent } from './novo-pacote/novo-pacote.component';
import { AprovacaoPacoteComponent } from './aprovacao-pacote/aprovacao-pacote.component';
import { ListaPacotesComponent } from './lista-pacotes/lista-pacotes.component';
import { DetalhesPacoteComponent } from './detalhes-pacote/detalhes-pacote.component';

const routes: Routes = [

  { path: 'novo-pacote', component: NovoPacoteComponent },
  { path: 'aprovacao-pacote/:id', component: AprovacaoPacoteComponent },
  { path: 'lista-pacotes', component: ListaPacotesComponent },
  { path: 'detalhes-pacote/:id', component: DetalhesPacoteComponent },

  { path: '', redirectTo: 'lista-pacotes', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
