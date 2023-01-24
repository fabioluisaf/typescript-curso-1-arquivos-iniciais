import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private msgView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void {
    const neegociacao = new Negociacao(
      this.inputData.valueAsDate,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber
    );

    this.negociacoes.adiciona(neegociacao);
    this.negociacoesView.update(this.negociacoes);
    this.msgView.update('Negociacao adicionada com sucesso');
    this.limparFomulario();
  }

  limparFomulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}