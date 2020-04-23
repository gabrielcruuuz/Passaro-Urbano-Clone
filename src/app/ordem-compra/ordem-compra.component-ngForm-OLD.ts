import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra-ngForm',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // Resgatando valor do template e inserindo na variavel
  @ViewChild('formulario') public formulario: NgForm;

  public idPedidoCompra:number; 

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra():void{
    const valoresFormulario = this.formulario.value;

    let pedido: Pedido = new Pedido(
      valoresFormulario.endereco,
      valoresFormulario.numero,
      valoresFormulario.complemento,
      valoresFormulario.formaPagamento
    )

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe( (pedidoSucesso: Pedido) =>{
      this.idPedidoCompra = pedidoSucesso.id
    } );
  }
}
