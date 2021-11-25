import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-novo-pacote',
  templateUrl: './novo-pacote.component.html',
  styleUrls: ['./novo-pacote.component.css']
})
export class NovoPacoteComponent implements OnInit {

  constructor(private service : PacoteService) { }

  ngOnInit(): void {
  }

  pacote: any ={
    detalhe: {}
  };

  salvar(){
    this.service.inserir(this.pacote)
      .subscribe(e => alert("Cadastro realizado"));
  }

}
