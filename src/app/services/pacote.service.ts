import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {
  API = '//etec-tour.herokuapp.com/v1/pacotes';

  constructor(private http : HttpClient) { }

  ListarTodos() : Observable<any>{
    return this.http.get(this.API);
  }

  buscarPorId(id : any) : Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }
}
