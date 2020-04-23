import {ItemCarrinho} from '../shared/item-carrinho.model';
import {Oferta} from '../shared/oferta.model';


class CarrinhoService{
    public listaItens: ItemCarrinho[] = [];

    public ExibirItens() : ItemCarrinho[] {
        return this.listaItens;
    }

    public IncluirItem(oferta: Oferta): void{
        let item: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemEncontrado = this.EncontrarItemNaLista(item);

        if(itemEncontrado){
            console.log('Item já foi adicionado no carrinho,' +
            'desta forma está sendo acerscentado uma unidade na quantidade');

            itemEncontrado.qtd += 1;
        }
        else{
            this.listaItens.push(item);
        }
    }

    public GetTotalValorCompras(): number{
        let total: number = 0;

        this.listaItens.map( (item: ItemCarrinho) =>{
            total = total + (item.valorOferta * item.qtd);
        } )

        return total;
    }

    public AlterarQuantidade(item: ItemCarrinho, operador: string): void{
    
        let itemEncontrado = this.EncontrarItemNaLista(item);

        if(itemEncontrado){
            if(operador === '+'){
                itemEncontrado.qtd += 1;
            }
            
            else if(operador === '-'){
                itemEncontrado.qtd -= 1;

                if(itemEncontrado.qtd === 0){
                    // removendo item da lista
                    let index = this.listaItens.indexOf(itemEncontrado);
                    this.listaItens.splice(index, 1);
                }
            }
        }
    }

    public EncontrarItemNaLista(item : ItemCarrinho): ItemCarrinho{

        let itemEncontrado = this.listaItens.find(
            (itemCarrinho: ItemCarrinho) => 
            itemCarrinho.idOferta === item.idOferta);

        return itemEncontrado;
    }

    public LimparCarrinho(): void{
        this.listaItens = [];
    }
}

export {CarrinhoService}