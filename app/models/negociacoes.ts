import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
}