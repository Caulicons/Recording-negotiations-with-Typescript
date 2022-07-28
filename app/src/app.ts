import { NegociaçãoController } from "./controllers/negociaçãoController.js";

const controller = new NegociaçãoController();

const form = document.querySelector('.form')

if(form) {
    form.addEventListener('submit', event => {
        
    event.preventDefault()
    controller.adicionar();
})
} else {

    throw Error(`Verifique ser a tag form foi declarada no DOM.`)
}

const imports = document.querySelector('#botão-importa')

if(imports) {
    imports.addEventListener('click', function () {controller.importa()})
} else {
    throw Error (`Verifique ser a id "botão-importa" foi declarada no DOM.`)
}

const btnApagar = document.querySelector('#botao-apagar')

if(btnApagar) {
    btnApagar.addEventListener('click', function () {controller.apagar()})
} else {
    throw Error ('Verifique ser a id "botão-apagar" foi declarada no DOM.')
}
