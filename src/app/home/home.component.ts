import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

 //instanciando a class de de serviço de modo singleton
  //service é tipo uma BLL
  constructor(private ofertasService: OfertasService) { }

  public listaOfertas: Array<Oferta>;
 
  async ngOnInit(): Promise<void> {
    this.listaOfertas = await this.ofertasService.getOfertas2(); 
  }

}
