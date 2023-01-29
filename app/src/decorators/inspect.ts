export function inspect() {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const retorno = metodoOriginal.apply(this, args);

      console.log(`---Metodo '${key}'`);
      console.log(`------parametros: ${JSON.stringify(args)}`);
      console.log(`------retorno: ${JSON.stringify(retorno)}`);

      return retorno;
    }

    return descriptor;
  }
}