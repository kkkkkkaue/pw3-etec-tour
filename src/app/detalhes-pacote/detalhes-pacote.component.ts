import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-detalhes-pacote',
  templateUrl: './detalhes-pacote.component.html',
  styleUrls: ['./detalhes-pacote.component.css']
})
export class DetalhesPacoteComponent implements OnInit {
  
  pacote : any = {};
  id: any = "";

  constructor(private route : ActivatedRoute, private service : PacoteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(this.id).subscribe(e => this.pacote = e);
  }
}
