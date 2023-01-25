import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
}