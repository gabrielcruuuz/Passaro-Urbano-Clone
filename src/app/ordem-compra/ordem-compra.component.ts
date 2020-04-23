import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service'
import { CarrinhoService} from '../services/carrinho.service';

import { Pedido } from '../shared/pedido.model'
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { FormGroup, FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // utilizando formularios reativos
  // construindo as validações com validators
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ])
    ,'numero': new FormControl(null, [ Validators.required, Validators.minLength(1) ] )
    ,'complemento': new FormControl(null)
    ,'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  public idPedidoCompra: number = undefined;
  public itensCarrinho: ItemCarrinho[] = [];

  constructor(private ordemCompraService: OrdemCompraService,
              public carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.ExibirItens();
  }

  public ConfirmarCompra(): void {

    // FEEDBACK VISUAL APOS O CLICK DO BOTÃO
    if(this.formulario.status === 'INVALID'){
      // pego todos os inputs formControl e marco como tocado
      // para serem aplicados os feedbacks visuais
      this.formulario.markAllAsTouched();
    }
    else{

      if(this.carrinhoService.ExibirItens().length === 0)
      {
        alert('você não selecionou nenhum item!!');
      }

      else{
        let valoresFormulario = this.formulario.value;
        let listaItensCarrinho = this.carrinhoService.ExibirItens();

        let pedido: Pedido = new Pedido(
          valoresFormulario.endereco,
          valoresFormulario.numero,
          valoresFormulario.complemento,
          valoresFormulario.formaPagamento,
          listaItensCarrinho
        );
  
        this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((pedidoSucesso: Pedido) => {
          this.idPedidoCompra = pedidoSucesso.id;
          this.carrinhoService.LimparCarrinho();
        });
      }

    }
  }

  public AlterarQuantidadeItem(item :ItemCarrinho, operador: string): void{
    this.carrinhoService.AlterarQuantidade(item, operador);
  }
}
