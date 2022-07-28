export function escape(
    target: any,
    parentKey: string,
    descriptor: PropertyDescriptor
     ) {
         const métodoOriginal = descriptor.value
         
         descriptor.value = function (...args: Array<any>) {
            let retorno = métodoOriginal.apply(this, args)
            
            if(typeof retorno === 'string'){
                console.log(`@escape em ação na classe
                    ${this.constructor.name} para o método ${parentKey}`)
                    
                retorno = retorno
                    .replace(/<script>(\w*\S*\s*)+?<\/script>/, '')
            }

            return retorno 
         }

         return descriptor
     }