export abstract class View<T>{

    protected elemento: HTMLElement;

    constructor(seletor: string) {

        const elemento = document.querySelector(seletor) 

        if(elemento) {

            this.elemento = document.querySelector(seletor) as HTMLElement
        } else {

            throw Error(`Seletor: ${seletor}, não foi encontrado. Verifique.`)
        }

    }

    update(modelo: T): void {

        this.elemento.innerHTML = this.template(modelo)
    }

    protected abstract template(modelo: T):string;
}