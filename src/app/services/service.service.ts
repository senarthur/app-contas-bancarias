import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Banco } from '../models/banco.model';
import { Conta } from '../models/conta.model';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private url:string = "https://brasilapi.com.br/api/banks/v1";

  constructor(private http:HttpClient) { }

  public buscarBancos() {
    return this.http.get(this.url).pipe(map(result => { 
      const bancos: Banco[] = (result as any);
      return bancos;
    }));
  }

  public find(code: any) {
    return this.http.get(`${this.url}/${code}`).pipe(map(banco => {
        return banco;
      })
    );
  }

  public save(dados:string, conta:string) {
    localStorage.setItem(conta, dados);
  }

  public getDados() {
    let elementos:Conta[] = [];

    for(let i = 0; i < localStorage.length; i++) {
      let chaveAtual = localStorage.key(i);
      if(chaveAtual === null) {
        return;
      }
      const dado:unknown = localStorage.getItem(chaveAtual);
      const string:unknown = JSON.parse(dado as string);
      const conta:Conta = string as Conta
      elementos.push(conta);
    }

    return elementos
  }
}
