export function escape(target, parentKey, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = métodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe
                    ${this.constructor.name} para o método ${parentKey}`);
            retorno = retorno
                .replace(/<script>(\w*\S*\s*)+?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map