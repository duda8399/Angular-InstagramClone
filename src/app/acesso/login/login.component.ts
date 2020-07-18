import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public msgErro: string
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [ Validators.required ]),
    'senha': new FormControl(null, [ Validators.required, Validators.minLength(6) ])
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit(): void {
  }

  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void {
    this.autenticacao.autenticar(this.formulario.value.email, this.formulario.value.senha)
      .catch((error: Error) => {
        this.msgErro = error.message
      })

  }

}
