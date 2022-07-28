export function logarTempoDeExecução(emSegundos: boolean = false) {

    return function(
        target: any,
        propertyKey: String,
        descriptor: PropertyDescriptor
        ) {
            const métodoOriginal = descriptor.value

           

            descriptor.value = function (...agrs: any[]) {
                let divisor:number = 1
                let medida:string = 'milissegundos'

                if(emSegundos) {
                    divisor = 1000
                    medida = 'segundos'
                }
                const t1 = performance.now()    
                const retorno = métodoOriginal.apply(this, agrs)
                const t2 = performance.now()
                console.log(`O método ${propertyKey}: tem o tempo de execução de ${(t2 - t1)/divisor} ${medida}` );
                return retorno
            }

            return descriptor
        }

        
}    