import { modelo } from "../utils/interfaces/modelo.js"

export class Negociação implements modelo<Negociação>{

    constructor(
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ){} 

    get data() {
        let data = new Date(this._data.getTime())
        return data
    }

    get volume(): number {

        return this.quantidade * this.valor
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociação {
        
        let data = new Date(dataString.replace(/-/g, ','))
        let quantidade = Number(quantidadeString)
        let valor = Number(valorString)

        return new Negociação(data, quantidade, valor) 
    }

    public paraTexto() {

        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `
    } 

    public ehIgual(negociação: Negociação): boolean {
        
        return negociação.data.getDay() == this.data.getDay()
        && negociação.data.getMonth() == this.data.getMonth()
        && negociação.data.getFullYear() == this.data.getFullYear()
    }
}