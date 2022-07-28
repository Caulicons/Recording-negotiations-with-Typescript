import { View } from "./View.js";
export class NegociaçõesView extends View {
    template(listaNegociações) {
        return `<table class="table table-houver table-bordered">
        <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
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
    </table>`;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
