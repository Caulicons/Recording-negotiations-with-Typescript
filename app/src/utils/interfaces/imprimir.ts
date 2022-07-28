import { Imprimível } from "./Imprimível.js";

export function Imprimir(...objetos: Array<Imprimível>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto())
    }
}