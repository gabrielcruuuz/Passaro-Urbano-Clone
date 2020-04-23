import { Pedido } from '../shared/pedido.model';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { URL_API_PEDIDOS } from './app.api';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){}

    public efetivarCompra(pedido : Pedido): Observable<any>{

        // configurando os headers para realizar a requisição post como JSON
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        const response = this.http.post(
            `${URL_API_PEDIDOS}`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        ).pipe(map( (response: Response) => response.json() ) );

        return response;
    }
}