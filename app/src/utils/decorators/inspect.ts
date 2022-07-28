export function inspect(target: any, propertyKey: String, descriptor: PropertyDescriptor) {

    const métodoOriginal = descriptor.value
    descriptor.value = function (...args: any[]) {
        
        const retorno = métodoOriginal.apply(this, args)
        console.log(`
            Nome do método: ${propertyKey},
            Parâmetros da função: ${JSON.stringify(args)},
            Retorno da função: ${retorno}
        `)
       return retorno
    } 
       return descriptor 
    }
