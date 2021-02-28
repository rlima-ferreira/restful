import { Component, OnInit } from '@angular/core';
import { PessoaService } from "./pessoa.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  //INICIA A VARIÁVEL QUE SERÁ USADA PARA RECEBER O CPF INFORMADO NA TELA
  cpf = '';
  //CRIA A VARIÁVEL QUE RECEBERA O OBJETO PESSOA DO SERVIDOR
  pessoa: any;

  cpfValidator = new FormControl('', [Validators.required]);

  constructor(private pessoaService: PessoaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //FAZ A BUSCA DE PESSOA BASEADA NO CPF INFORMADO NA TELA
  searchPerson() {
    if (this.cpfValidator.valid) {
      this.pessoaService.getPessoa(this.cpf).subscribe(pessoaResult => {
        console.log("pessoa: ", pessoaResult)
        if (pessoaResult !== undefined) {
          this.pessoa = pessoaResult;
        } else {
          this._snackBar.open("Usuário não encontrado.", "Fechar", { duration: 2000, });
        }
      },
        () => this._snackBar.open("Usuário não encontrado.", "Fechar", { duration: 2000, }))
    }
  }

}
