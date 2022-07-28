var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociação } from "../models/Negociação.js";
import { ArmazenamentoLS } from "../utils/decorators/DecoratorLS.js";
export class NegociaçõesLS {
    static obterNegociaçõesLS() {
        const negociaçõesImportadas = JSON.parse(localStorage.getItem('NegociaçõesTS'));
        const negociações = negociaçõesImportadas.map((negociaçãoImportada) => {
            return new Negociação(new Date(negociaçãoImportada._data), negociaçãoImportada.quantidade, negociaçãoImportada.valor);
        });
        return negociações;
    }
    static adicionandoNegociação(negociação) {
        let negociações = JSON.parse(localStorage.getItem('NegociaçõesTS'));
        negociações.push(negociação);
        localStorage.setItem('NegociaçõesTS', JSON.stringify(negociações));
    }
    static limpandoLS() {
        localStorage.setItem('NegociaçõesTS', JSON.stringify([]));
    }
}
__decorate([
    ArmazenamentoLS
], NegociaçõesLS, "obterNegocia\u00E7\u00F5esLS", null);
//# sourceMappingURL=Negocia%C3%A7%C3%B5esLS.js.map