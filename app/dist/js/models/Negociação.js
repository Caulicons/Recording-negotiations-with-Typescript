export class Negociação {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        let data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        let data = new Date(dataString.replace(/-/g, ','));
        let quantidade = Number(quantidadeString);
        let valor = Number(valorString);
        return new Negociação(data, quantidade, valor);
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `;
    }
    ehIgual(negociação) {
        return negociação.data.getDay() == this.data.getDay()
            && negociação.data.getMonth() == this.data.getMonth()
            && negociação.data.getFullYear() == this.data.getFullYear();
    }
}
//# sourceMappingURL=Negocia%C3%A7%C3%A3o.js.map