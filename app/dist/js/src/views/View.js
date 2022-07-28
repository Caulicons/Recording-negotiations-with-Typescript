export class View {
    constructor(seletor, escapa) {
        this.escapa = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = document.querySelector(seletor);
        }
        else {
            throw Error(`Seletor: ${seletor}, não foi encontrado. Verifique.`);
        }
        if (escapa) {
            this.escapa = escapa;
        }
    }
    update(modelo) {
        if (this.escapa) {
            const exp = /<script>(\w*\S*\s*)+?<\/script>/;
            this.template(modelo).replace(exp, '');
        }
        this.elemento.innerHTML = this.template(modelo);
    }
}
