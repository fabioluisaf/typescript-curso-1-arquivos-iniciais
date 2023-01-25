export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dataProxy = new Date(this._data.getTime());
        return dataProxy;
    }
    static criaDe(dataString, qtdString, valString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const qtd = parseInt(qtdString);
        const val = parseFloat(valString);
        return new Negociacao(data, qtd, val);
    }
}
