import { NegociaçãoController } from "./controllers/negociaçãoController.js";
const controller = new NegociaçãoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error(`Verifique ser a tag form foi declarada no DOM.`);
}
