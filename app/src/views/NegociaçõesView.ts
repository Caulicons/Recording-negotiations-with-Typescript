import { Negociações } from "../models/Negociações.js"
import { escape } from "../utils/decorators/escape.js"
import { View } from "./View.js"


export class NegociaçõesView extends View<Negociações>{
    
    @escape
    protected template(listaNegociações: Negociações): string {
        
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
                </tr>`
                ).join('')}         
        </tbody>
        <tfoot>
            <td colspan=3>TOTAL :  </td>
            <td>${listaNegociações.lista().reduce( (volumeInicial, volumeNegociação) => volumeInicial + volumeNegociação.volume, 0)}</td>
        </tfoot>
    </table>`
    }   

    private formatar(data: Date) {

        return new Intl.DateTimeFormat().format(data)
    }
}