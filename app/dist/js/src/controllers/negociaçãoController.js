import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociação } from "../models/Negociação.js";
import { Negociações } from "../models/Negociações.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociaçõesView } from "../views/NegociaçõesView.js";
export class NegociaçãoController {
    constructor() {
        this.listaNegociações = new Negociações();
        this.negociaçõesView = new NegociaçõesView('#viewNegociações');
        this.mensagemView = new MensagemView('#mensagemView');
        this.dataInput = document.querySelector('#data');
        this.quantidadeInput = document.querySelector('#quantidade');
        this.valorInput = document.querySelector('#valor');
        this.negociaçõesView.update(this.listaNegociações);
    }
    adicionar() {
        let negociação = Negociação.criaDe(this.dataInput.value, this.quantidadeInput.value, this.valorInput.value);
        if (!this.ehDiaÚtil(negociação.data)) {
            this.mensagemView.update(`Só é possível incluir negociações em dias úteis.`);
            return;
        }
        this.listaNegociações.adicionar(negociação);
        this.atualizarView();
    }
    ehDiaÚtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO;
    }
    limparFormulário() {
        this.dataInput.value = '';
        this.quantidadeInput.value = '';
        this.valorInput.value = '';
        this.dataInput.focus();
    }
    atualizarView() {
        this.negociaçõesView.update(this.listaNegociações);
        this.mensagemView.update(`Mensagens adicionadas com sucesso.`);
    }
}
