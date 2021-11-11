import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aprovacao-pacote',
  templateUrl: './aprovacao-pacote.component.html',
  styleUrls: ['./aprovacao-pacote.component.css']
})
export class AprovacaoPacoteComponent implements OnInit {

  pacote : any = {};
  id : any = "";

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.pacote = { "id": 2, "valor": 5499, "nome": "Egito (Cairo)", "dataInicio": "2021-06-16 11:00:00", "dataFim": "2021-06-28 11:00:00", "aprovado": false };
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
