import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  // resgatando valores passado na uri por parametro
  constructor(private route: ActivatedRoute, 
              private ofertasService:OfertasService) {}  

  public oferta: Oferta;
  public abaInicialAtiva: boolean;

  async ngOnInit() {

    // resgatando valores passado na uri por parametro
    // via snapshot
    // const idOferta = this.route.snapshot.params['id'];
    // this.oferta = await this.OfertasService.getOfertaPorId(idOferta);

    // resgatando valores passado na uri por parametro
    // via subscribe(watcher)
    this.route.params.subscribe(async (parametro: any) => {
      const idOferta = parametro.id;
      this.oferta = await this.ofertasService.getOfertaPorId(idOferta);

      this.abaInicialAtiva = true;
    });
  }

  DesabilitaAbaInicial(): void {
    this.abaInicialAtiva = false;
  }
}
