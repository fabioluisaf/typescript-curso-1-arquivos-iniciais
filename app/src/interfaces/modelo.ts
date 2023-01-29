import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";

export interface Modelo<C> extends Comparavel<C>, Imprimivel {}