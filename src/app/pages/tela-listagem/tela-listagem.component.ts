import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/models/banco.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tela-listagem',
  templateUrl: './tela-listagem.component.html',
  styleUrls: ['./tela-listagem.component.css']
})
export class TelaListagemComponent implements OnInit {

  private bancos:any[] = [];
  public pesquisar:string = '';
  
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.buscarBancos();
  }

  public getBancos():any[] {
    return this.bancos.filter(bank => {
      if(bank.code != null) {
        return bank;
      }
    });
  }

  public buscarBancos() {
    this.service.buscarBancos().subscribe((resp) => {
      this.bancos = [...this.bancos, ...resp];
    });
  }

  public onSearchChange(e: any) {
    let value = e;

    if(value === '' || value === undefined) {
      this.buscarBancos()
      return;
    }

    this.service.find(value).subscribe({
      next: (res) => { this.bancos = [res] },
      error: (err) => { this.bancos = [] }
    }); 
   
 }
}

