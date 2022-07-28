var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negociação } from "../models/Negociação.js";
import { NegociaçõesLS } from "./NegociaçõesLS.js";
export class NegociaçõesService {
    static obterNegociações() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch('http://localhost:8080/dados')
                .then(res => res.json())
                .then(dados => dados
                .map((dadoDeHoje) => {
                return new Negociação(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            }))
                .catch(err => {
                console.log(err.target.result);
            });
        });
    }
    static obterNegociaçõesLS() {
        return NegociaçõesLS.obterNegociaçõesLS();
    }
    static apagarNegociações() {
        NegociaçõesLS.limpandoLS();
    }
}
//# sourceMappingURL=negocia%C3%A7%C3%B5esService.js.map