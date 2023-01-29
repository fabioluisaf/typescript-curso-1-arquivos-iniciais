export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, qtdString, valString) {
        const capturaHifen = /-/g;
        const data = new Date(dataString.replace(capturaHifen, ','));
        const qunatidade = parseInt(qtdString);
        const valor = parseFloat(valString);
        return new Negociacao(data, qunatidade, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dataProxy = new Date(this._data.getTime());
        return dataProxy;
    }
    paraTexto() {
        return `
    Data: ${this.data},
    Quantidade: ${this.quantidade},
    Valor: ${this.valor}
    `;
    }
    ehIgual(outraNegociacao) {
        return this.data.getDate() === outraNegociacao.data.getDate()
            && this.data.getMonth() === outraNegociacao.data.getMonth()
            && this.data.getFullYear() === outraNegociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map