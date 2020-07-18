import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Usuario } from '../usuario.model'
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public msgErro: string
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup ({
    'email': new FormControl(null, [ Validators.required ]),
    'senha': new FormControl(null, [ Validators.required, Validators.minLength(6) ]),
    'nome_completo': new FormControl(null, [ Validators.required ]),
    'nome_usuario': new FormControl(null, [ Validators.required ])
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit(): void {
  }

  public exibirPainelLogin(): void{
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void {
    let usuario: Usuario = new Usuario (
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )

      this.autenticacao.cadastrarUsuario(usuario)
        .then(() => this.exibirPainelLogin())
        .catch((error: Error) => {
          this.msgErro = error.message
        })
  }

}
