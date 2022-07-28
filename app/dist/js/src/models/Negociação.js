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
        let valor = parseFloat(valorString);
        return new Negociação(data, quantidade, valor);
    }
}
