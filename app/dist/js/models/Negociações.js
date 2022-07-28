export class Negociações {
    constructor() {
        this.listaNegociações = [];
    }
    adicionar(negociação) {
        this.listaNegociações.push(negociação);
    }
    lista() {
        return this.listaNegociações;
    }
    apagar() {
        this.listaNegociações.splice(0);
    }
    paraTexto() {
        return JSON.stringify(this.lista(), null, 2);
    }
    ehIgual(objeto) {
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista());
    }
}
//# sourceMappingURL=Negocia%C3%A7%C3%B5es.js.map