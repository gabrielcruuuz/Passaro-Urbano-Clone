import { Component, OnInit} from '@angular/core';
import { Observable, Subject, of} from 'rxjs';

import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public listaOfertasObservable: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  public valorBusca:string =  '';

  ngOnInit(): void {
    // utilizando observables 
    this.listaOfertasObservable = this.subjectPesquisa
    .pipe(debounceTime(1500)) // tempo de espera antes de executar o codigo abaixo
    .pipe(distinctUntilChanged())
    .pipe(switchMap((termo: string) => { //switchMap vai resgatar apenas o ultimo parametro empilhado pelo next()
      if(termo.trim() === '')
      {
        return of([]);
      }
      return this.ofertasService.pesquisaOferta(termo); //chamada ao serviço passando o ultimo parametro empilhado
    }))
  }

  public Pesquisa(termoDaPesquisa: string): void{
    let termo = termoDaPesquisa.trim();
    // utilizando observables 
    //next vai empilhando os parametros de todas as chamadas a essa função
    this.subjectPesquisa.next(termo);
  }

  public Clear(): void{
    this.subjectPesquisa.next('');
    this.valorBusca = '';
  }
}
