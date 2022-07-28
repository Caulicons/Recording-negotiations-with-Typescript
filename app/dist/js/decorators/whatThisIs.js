export function whatThisIS() {
    return function (target, key, descriptor) {
        const métodoOriginal = descriptor.value;
        descriptor.value = function (...agrs) {
            const parâmetros = agrs.join();
            const retorno = métodoOriginal.apply(this, agrs);
            console.log(`
            Nome do método: ${key},
            Parâmetros da função: ${parâmetros},
            Retorno da função: ${retorno}
        `);
            return retorno;
        };
        return descriptor;
    };
}
