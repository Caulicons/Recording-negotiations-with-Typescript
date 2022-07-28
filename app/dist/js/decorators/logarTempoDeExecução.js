export function logarTempoDeExecução(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const métodoOriginal = descriptor.value;
        descriptor.value = function (...agrs) {
            let divisor = 1;
            let medida = 'milissegundos';
            if (emSegundos) {
                divisor = 1000;
                medida = 'segundos';
            }
            const t1 = performance.now();
            const retorno = métodoOriginal.apply(this, agrs);
            const t2 = performance.now();
            console.log(`O método ${propertyKey}: tem o tempo de execução de ${(t2 - t1) / divisor} ${medida}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoDeExecu%C3%A7%C3%A3o.js.map