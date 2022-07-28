import { NegociaçõesDoDia } from "../utils/interfaces/NegociaçõesDoDia.js";
import { Negociação } from "../models/Negociação.js";
import { NegociaçõesLS } from "./NegociaçõesLS.js";


export class NegociaçõesService{

     public static async obterNegociações(): Promise<Negociação[]> {

       return await fetch('http://localhost:8080/dados')
          .then(res => res.json())
          .then(dados => dados
             .map((dadoDeHoje: NegociaçõesDoDia) => {
                 return new Negociação(
                     new Date(),
                     dadoDeHoje.vezes,
                     dadoDeHoje.montante);
             }
          ))
          .catch( err => {
            console.log(err.target.result)
             
          } )
     }

     public static obterNegociaçõesLS(): Negociação[] {

       return NegociaçõesLS.obterNegociaçõesLS()
     }

     public static apagarNegociações(): void {

        NegociaçõesLS.limpandoLS()
     }
}  