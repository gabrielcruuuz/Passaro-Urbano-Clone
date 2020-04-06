import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public listaOfertas: Array<Oferta>;

  async ngOnInit(): Promise<void> {
    this.listaOfertas = await 
      this.ofertasService.getOfertasPorCategoria('restaurante'); 
  }

}
