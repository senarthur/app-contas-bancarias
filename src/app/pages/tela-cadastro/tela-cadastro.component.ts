import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})

export class TelaCadastroComponent implements OnInit {
  bancoForm!:FormGroup
  agencia:string = '';
  conta:string = '';
  public bankInfo: any;
  
  constructor(private form: AppComponent, private service: ServiceService, private rotaAtiva: ActivatedRoute, private rota:Router) { 
    this.bancoForm = this.form.getBankForm();
  }

  ngOnInit(): void {
    const index: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.fetchData(index);
  }

  public fetchData(index:number) {
    this.service.find(index).subscribe(resp => {
      this.bankInfo = resp;
    }, err => {
      console.log(err);
    })
  }

  public save() {
    const formDados = this.bancoForm.value;
    const code = this.bankInfo.code;
    const dados = {...formDados, code}
    
    if(this.bancoForm.valid) {
      this.service.save(JSON.stringify(dados), dados.conta);
      this.agencia = '';
      this.conta = '';
      this.bancoForm.reset();
      this.rota.navigate(['/inicio']);
    }
  }
}
