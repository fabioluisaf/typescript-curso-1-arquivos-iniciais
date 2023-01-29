import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public ehIgual(outraNegociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(outraNegociacoes.negociacoes);
  }
}