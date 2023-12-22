import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/conta.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  public cadastro = true;
  public naoCadastrado = false;
  public contas:Conta[] | undefined = [];
  
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getContas();
  }
  
  public getContas():void {
    this.contas = this.service.getDados();
    
    if(this.contas === undefined ||this.contas.length === 0) {
      this.naoCadastrado = !this.naoCadastrado;
      this.cadastro = !this.cadastro;
      return;
    }
  }
}
