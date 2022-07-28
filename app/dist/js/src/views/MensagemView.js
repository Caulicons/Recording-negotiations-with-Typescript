import { View } from "./View.js";
export class MensagemView extends View {
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }
    esmaecendoMensagem() {
        return () => { this.elemento.innerHTML = `<p></p>`; };
    }
}
