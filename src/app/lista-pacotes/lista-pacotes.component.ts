import { Component, OnInit } from '@angular/core';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-lista-pacotes',
  templateUrl: './lista-pacotes.component.html',
  styleUrls: ['./lista-pacotes.component.css']
})
export class ListaPacotesComponent implements OnInit {

  pacotes: Array<any> = [];

  constructor(private service : PacoteService) { }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(e => this.pacotes = e);
  }

}
