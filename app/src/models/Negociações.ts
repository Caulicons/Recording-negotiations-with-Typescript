import { modelo } from "../utils/interfaces/modelo.js";
import { Negociação } from "./Negociação.js";

export class Negociações implements modelo<Negociações> {
    private listaNegociações: Negociação[] = [];

    public adicionar(negociação: Negociação): void {

        this.listaNegociações.push(negociação)
    }

    public lista(): readonly Negociação[] {

        return this.listaNegociações
    }

    public apagar(): void {

        this.listaNegociações.splice(0)
    }

    public paraTexto(): string {

        return JSON.stringify(this.lista(), null, 2)
    }

    ehIgual(objeto: Negociações): boolean {
        
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista())
    }

  
}