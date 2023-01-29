export function inspect() {
    return function (target, key, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            console.log(`---Metodo '${key}'`);
            console.log(`------parametros: ${JSON.stringify(args)}`);
            console.log(`------retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map