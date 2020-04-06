import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public listaOfertas: Array<Oferta>;

  async ngOnInit(): Promise<void> {
    this.listaOfertas = await 
      this.ofertasService.getOfertasPorCategoria('diversao'); 
  }

}
