import { Negociação } from "../models/Negociação.js"
import { ArmazenamentoLS } from "../utils/decorators/DecoratorLS.js"
import { ModeloNegociaçõesLS } from "../utils/interfaces/ModeloNegociaçãoesLS.js"


export class NegociaçõesLS {

    @ArmazenamentoLS
    public static obterNegociaçõesLS(): Negociação[] {

        const negociaçõesImportadas = JSON.parse(localStorage.getItem('NegociaçõesTS') as string) as Array<ModeloNegociaçõesLS>

        const negociações = negociaçõesImportadas.map( (negociaçãoImportada: ModeloNegociaçõesLS) => {
            
            return new Negociação(
                new Date(negociaçãoImportada._data),
                negociaçãoImportada.quantidade,
                negociaçãoImportada.valor
            )})

            
        return negociações
    }

    
    public static adicionandoNegociação(negociação: Negociação): void {

        let negociações = JSON.parse(localStorage.getItem('NegociaçõesTS') as string) as Array<Negociação>

        negociações.push(negociação)

        localStorage.setItem('NegociaçõesTS', JSON.stringify(negociações))
    } 

    public static limpandoLS(): void {

        localStorage.setItem('NegociaçõesTS', JSON.stringify([]))
    }
}