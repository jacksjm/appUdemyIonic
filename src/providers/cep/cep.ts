import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepProvider {
  public URI_CEP: string = "http://viacep.com.br/ws/"
  public headers: Headers = new Headers()

  constructor(public http: Http) {
  }
  public listarEndereco(cep: number): Promise<Response> {
    this.headers.append('Content-Type','application/json');

    return this.http.get(this.URI_CEP + cep + '/json', {headers: this.headers}).toPromise()
  }
}
