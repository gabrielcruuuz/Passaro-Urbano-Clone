import '../shared/oferta.model';

class ItemCarrinho{
    constructor(
        public idOferta: number,
        public imgOferta: string,
        public tituloOferta: string,
        public descricaoOferta: string,
        public valorOferta: number,
        public qtd: number
    ){ }
}

export {ItemCarrinho};