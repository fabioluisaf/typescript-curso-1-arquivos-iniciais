import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
}