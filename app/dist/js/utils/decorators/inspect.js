export function inspect(target, propertyKey, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = métodoOriginal.apply(this, args);
        console.log(`
            Nome do método: ${propertyKey},
            Parâmetros da função: ${JSON.stringify(args)},
            Retorno da função: ${retorno}
        `);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map