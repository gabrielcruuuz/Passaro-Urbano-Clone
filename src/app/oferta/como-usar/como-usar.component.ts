import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  async ngOnInit() {
    // resgatando parametros da rota pai (Oferta)
    this.route.parent.params.subscribe(async (parametro: any) => {
      const idOferta = parametro.id;
      this.comoUsar = await this.ofertasService.getComoUsarOfertaPorId(idOferta);
    });
  }

}
