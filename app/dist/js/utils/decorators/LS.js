export function ArmazenamentoLS(target, propertyKey, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        if (!JSON.parse(localStorage.getItem('NegociaçõesTS'))) {
            localStorage.setItem('NegociaçõesTS', '[]');
        }
        console.log('passou por aqui');
        return métodoOriginal.apply(this, args);
    };
    return descriptor;
}
//# sourceMappingURL=LS.js.map