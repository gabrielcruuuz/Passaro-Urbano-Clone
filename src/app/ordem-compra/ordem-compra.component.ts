import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  // validacao
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public AtualizaEndereco(endereco: string){
    this.endereco = endereco;

    if(this.endereco.length > 3){
      this.enderecoValido = true;
    }
    else{
      this.enderecoValido = false;
    }
  }

  public AtualizaNumero(numero: string){
    this.numero = numero;

    if(this.numero.length > 1){
      this.numeroValido = true;
    }
    else{
      this.numeroValido = false;
    }

  }

  public AtualizaComplemento(complemento: string){
    this.complemento = complemento;

    if(this.complemento.length > 0){
      this.complementoValido = true;
    }
    else{
      this.complementoValido = false;
    }
  }

  public AtualizaFormaPagamento(formaPagamento: string){
    this.formaPagamento = formaPagamento;

    if(this.formaPagamento.toLocaleLowerCase() !== 'selecione uma opção'){
          this.formaPagamentoValido = true;
    }
    else{
      this.formaPagamentoValido = false;
    }
  }

}
