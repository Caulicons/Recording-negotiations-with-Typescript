export function DOMInjector(seletor: string) {
  
    
    return function (
        target: any,
        propertyKey: string
    ) {
        let elemento: HTMLInputElement
        const getter = function() {
            
            if(!elemento) {
                elemento = <HTMLInputElement>document.querySelector(seletor)
            }
            return elemento
        }


        Object.defineProperty(target, propertyKey, {get: getter} )
    }
}

