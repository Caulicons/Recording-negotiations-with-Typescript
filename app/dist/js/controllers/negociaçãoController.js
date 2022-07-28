var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DiasDaSemana } from "../utils/enums/diasDaSemana.js";
import { Negociação } from "../models/Negociação.js";
import { Negociações } from "../models/Negociações.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociaçõesView } from "../views/NegociaçõesView.js";
import { DOMInjector } from "../utils/decorators/DOMInject.js";
import { NegociaçõesService } from "../service/negociaçõesService.js";
import { Imprimir } from "../utils/interfaces/imprimir.js";
import { NegociaçõesLS } from "../service/NegociaçõesLS.js";
export class NegociaçãoController {
    constructor() {
        this.listaNegociações = new Negociações();
        this.negociaçõesView = new NegociaçõesView('#viewNegociações');
        this.mensagemView = new MensagemView('#mensagemView');
        this.importaLS();
    }
    adicionar() {
        let negociação = Negociação.criaDe(this.dataInput.value, this.quantidadeInput.value, this.valorInput.value);
        if (!this.ehDiaÚtil(negociação.data)) {
            this.mensagemView.update(`Só é possível incluir negociações em dias úteis.`);
            return;
        }
        Imprimir(this.listaNegociações, negociação);
        this.afterAdd(negociação);
    }
    importa() {
        NegociaçõesService.obterNegociações()
            .then(negociaçõesDeHoje => {
            return negociaçõesDeHoje.filter(negociaçãoDoDia => {
                return !this.listaNegociações
                    .lista()
                    .some(negociação => negociação
                    .ehIgual(negociaçãoDoDia));
            });
        })
            .then(negociaçõesDeHoje => {
            for (let negociação of negociaçõesDeHoje) {
                this.listaNegociações.adicionar(negociação);
                this.negociaçõesView.update(this.listaNegociações);
            }
        })
            .catch(err => console.log('Não foi possível fazer o API Rest. Você subiu o servido da pasta "servido-api" ?'));
    }
    apagar() {
        this.listaNegociações.apagar();
        this.negociaçõesView.update(this.listaNegociações);
        NegociaçõesService.apagarNegociações();
    }
    importaLS() {
        NegociaçõesService.obterNegociaçõesLS()
            .forEach(negociação => this.listaNegociações.adicionar(negociação));
        this.negociaçõesView.update(this.listaNegociações);
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
        this.mensagemView.update(`Negociações adicionadas com sucesso.`);
    }
    afterAdd(negociação) {
        this.listaNegociações.adicionar(negociação);
        NegociaçõesLS.adicionandoNegociação(negociação);
        this.atualizarView();
        this.limparFormulário();
    }
}
__decorate([
    DOMInjector('#data')
], NegociaçãoController.prototype, "dataInput", void 0);
__decorate([
    DOMInjector('#quantidade')
], NegociaçãoController.prototype, "quantidadeInput", void 0);
__decorate([
    DOMInjector('#valor')
], NegociaçãoController.prototype, "valorInput", void 0);
//# sourceMappingURL=negocia%C3%A7%C3%A3oController.js.map