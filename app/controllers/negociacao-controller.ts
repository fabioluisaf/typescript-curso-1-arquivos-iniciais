import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private msgView = new MensagemView('#mensagemView');

  public constructor() {
    this.inputData = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    
    if (!this.ehDiaUtil(negociacao.data)) {
      this.msgView.update("Apenas negociacoes em dias úteis são aceitas.");
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.limparFomulario();
    this.atualizaViews();
  }

  private limparFomulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaViews(): void {
    this.negociacoesView.update(this.negociacoes);
    this.msgView.update('Negociação adicionada com sucesso');
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() !== DiasDaSemana.SABADO && data.getDay() !== DiasDaSemana.DOMINGO;
  }
}