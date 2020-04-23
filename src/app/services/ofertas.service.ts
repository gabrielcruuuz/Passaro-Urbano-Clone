import { Oferta } from '../shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from "rxjs/operators";

import { URL_API_OFERTA, URL_API_COMO_USAR, URL_API_ONDE_FICA } from './app.api';

@Injectable ()
export class OfertasService {

    constructor(private http: Http){}

    // async usando promise
    public async getOfertas2(): Promise<Oferta[]>{
        let response = await 
            this.http.get(`${URL_API_OFERTA}?destaque=true`)
            .toPromise();

        return response.json();
    }    

    public async getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        let response = await 
            this.http.get(`${URL_API_OFERTA}?categoria=${categoria}`)
            .toPromise();

        return response.json();
    }    

    public async getOfertaPorId(idOferta: number): Promise<Oferta>{
        let response = await 
            this.http.get(`${URL_API_OFERTA}?id=${idOferta}`)
            .toPromise();

        // o retorno sempre é uma lista
        // neste caso utilizamos algum metodo para pegar apenas o primeiro indice
        // return response.json().shift();

        return response.json()[0];
    }
    
    public async getComoUsarOfertaPorId(idOferta: number): Promise<string>{
        let response = await 
            this.http.get(`${URL_API_COMO_USAR}?id=${idOferta}`)
            .toPromise();
        return response.json()[0].descricao;
    }

    public async getOndeFicaOfertaPorId(idOferta: number): Promise<string>{
        let response = await 
            this.http.get(`${URL_API_ONDE_FICA}?id=${idOferta}`)
            .toPromise();
        return response.json()[0].local;
    }

    public pesquisaOferta(termoDaPesquisa: string): Observable<Oferta[]>{
        let response = this.http.get(`${URL_API_OFERTA}?descricao_oferta_like=${termoDaPesquisa}`)
        .pipe(retry(10))
        .pipe(map((response: any) => response.json()));

        return response;
    }
}