import { UnidadeDeTempo } from "../enums/unidades-tempo.js";
export function logarTempoDeExecucao(unidadeDeTempo = UnidadeDeTempo.MILISEGUNDOS) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = unidadeDeTempo.divisor;
            let unidade = unidadeDeTempo.unidade;
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} executou em ${(t2 - t1) / divisor} ${unidade}.`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map