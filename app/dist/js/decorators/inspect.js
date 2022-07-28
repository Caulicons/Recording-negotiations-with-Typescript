export function inspect(target, key, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = métodoOriginal.apply(this, args);
        console.log(`
            Nome do método: ${key},
            Parâmetros da função: ${JSON.stringify(args)},
            Retorno da função: ${JSON.stringify(args)}
        `);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map