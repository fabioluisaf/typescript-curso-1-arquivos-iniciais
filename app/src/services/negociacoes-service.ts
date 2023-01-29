import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public async obterNegociacoes() : Promise<Negociacao[]> {
    const res = await fetch('http://localhost:8080/dados');
    const dados : NegociacoesDoDia[] = await res.json();
    
    return dados.map(dadoDeHoje => {
      return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
    });
  }
}