export function ArmazenamentoLS(
    target: any,
    propertyKey: String,
    descriptor: PropertyDescriptor
) {
    const métodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]) {
    
        if(!JSON.parse(localStorage.getItem('NegociaçõesTS') as string)) {

            localStorage.setItem('NegociaçõesTS', '[]')
        }

       return métodoOriginal.apply(this, args)
    }

    return descriptor
}