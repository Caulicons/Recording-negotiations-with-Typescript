export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = document.querySelector(seletor);
        }
        else {
            throw Error(`Seletor: ${seletor}, não foi encontrado. Verifique.`);
        }
    }
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}
//# sourceMappingURL=View.js.map