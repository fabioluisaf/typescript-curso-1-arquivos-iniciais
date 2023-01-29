export class UnidadeDeTempo {
    constructor(unidade, divisor) {
        this.unidade = unidade;
        this.divisor = divisor;
    }
}
UnidadeDeTempo.SEGUNDOS = new UnidadeDeTempo("segundos", 1000);
UnidadeDeTempo.MILISEGUNDOS = new UnidadeDeTempo("milisegundos", 1);
//# sourceMappingURL=unidades-tempo.js.map