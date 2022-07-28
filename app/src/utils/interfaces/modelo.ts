import { Imprimível } from "./Imprimível.js";
import { Comparativo } from "./Comparativo";

export interface modelo<T> extends Imprimível, Comparativo<T> {}

