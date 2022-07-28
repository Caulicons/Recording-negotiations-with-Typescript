var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../utils/decorators/escape.js";
import { View } from "./View.js";
export class NegociaçõesView extends View {
    template(listaNegociações) {
        return `<table class="table table-houver table-bordered">
        <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </th>
        </thead>
        <tbody>
            ${listaNegociações.lista().map(negociação => `
                <tr>
                     <td>${this.formatar(negociação.data)}</td>
                     <td>${negociação.quantidade}</td>
                     <td>${negociação.valor}</td>
                     <td>${negociação.volume}</td>
                </tr>`).join('')}         
        </tbody>
        <tfoot>
            <td colspan=3>TOTAL :  </td>
            <td>${listaNegociações.lista().reduce((volumeInicial, volumeNegociação) => volumeInicial + volumeNegociação.volume, 0)}</td>
        </tfoot>
    </table>`;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    escape
], NegociaçõesView.prototype, "template", null);
//# sourceMappingURL=Negocia%C3%A7%C3%B5esView.js.map