import { Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { RestaurantesComponent } from '../app/restaurantes/restaurantes.component';
import { DiversaoComponent } from '../app/diversao/diversao.component';
import { OfertaComponent } from '../app/oferta/oferta.component';
import { ComoUsarComponent } from '../app/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from '../app/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from '../app/ordem-compra/ordem-compra.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: HomeComponent},
    {path: 'ordem-compra', component: OrdemCompraComponent},
    {path: 'oferta/:id', component: OfertaComponent, 
    // Utilizando rotas filhas (exemplo para tabs)
        children:[
            {path: '', component: ComoUsarComponent},
            {path: 'como-usar', component: ComoUsarComponent},
            {path: 'onde-fica', component: OndeFicaComponent}
        ]}
];

