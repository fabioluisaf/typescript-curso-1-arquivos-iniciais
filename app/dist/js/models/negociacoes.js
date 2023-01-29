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
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(outraNegociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(outraNegociacoes.negociacoes);
    }
}
//# sourceMappingURL=negociacoes.js.map