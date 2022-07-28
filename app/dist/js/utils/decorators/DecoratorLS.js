export function ArmazenamentoLS(target, propertyKey, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        if (!JSON.parse(localStorage.getItem('NegociaçõesTS'))) {
            localStorage.setItem('NegociaçõesTS', '[]');
        }
        return métodoOriginal.apply(this, args);
    };
    return descriptor;
}
//# sourceMappingURL=DecoratorLS.js.map