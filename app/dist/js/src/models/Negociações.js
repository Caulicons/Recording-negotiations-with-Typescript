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
}
