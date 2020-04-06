import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  async ngOnInit() {
      // resgatando parametros da rota pai (Oferta)
      // const idOferta = this.route.parent.snapshot.params['id']; 
      // this.ondeFica = await this.ofertasService.getOndeFicaOfertaPorId(idOferta);

      this.route.parent.params.subscribe(async (parametro: any) => {
        const idOferta = parametro.id;
        this.ondeFica = await this.ofertasService.getOndeFicaOfertaPorId(idOferta);
      });
  }

}
