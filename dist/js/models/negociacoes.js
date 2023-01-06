export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    lista() {
        return this.negociacoes;
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
