import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPessoa(cpf: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}pessoa/${cpf}`);
  }
}