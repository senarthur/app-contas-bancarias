import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-contas-bancarias';

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

      bancoForm: this.formBuilder.group({
        agencia: ['', Validators.compose([ Validators.required, Validators.minLength(4)])],
        conta: ['', Validators.compose([ Validators.required, Validators.minLength(6)])]
      })
    })
  }

  public getBankForm(): FormGroup {
    return this.form.get('bancoForm') as FormGroup;
  }
}
