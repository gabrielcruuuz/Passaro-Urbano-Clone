import {ItemCarrinho} from './item-carrinho.model';

export class Pedido {

    public id: number;
    public Endereco: string;
    public Numero: string;
    public Complemento: string;
    public FormaPagamento: string;
    public listaItensCarrinho: ItemCarrinho[];

    constructor(endereco: string
        , numero: string
        , complemento: string
        , formaPagamento: string
        , listaItensCarrinho: ItemCarrinho[]) 
        {
            this.Endereco = endereco;
            this.Numero = numero;
            this.Complemento = complemento;
            this.FormaPagamento = formaPagamento;
            this.listaItensCarrinho = listaItensCarrinho;
        }
}
