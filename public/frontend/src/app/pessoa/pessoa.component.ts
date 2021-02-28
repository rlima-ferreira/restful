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
  cpf = '';
  pessoa: any;

  cpfValidator = new FormControl('', [Validators.required]);

  constructor(private pessoaService: PessoaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

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
        err => this._snackBar.open("Usuário não encontrado.", "Fechar", { duration: 2000, }))
    }
  }

}
