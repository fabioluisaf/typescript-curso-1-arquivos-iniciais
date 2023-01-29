import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private msgView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  public constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect()
  @logarTempoDeExecucao()
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
    imprimir(negociacao, this.negociacoes);
    this.limparFomulario();
    this.atualizaViews();
  }

  public importaDados(): void {
    this.negociacoesService
      .obterNegociacoes()
      .then(negociacoesDeHoje => {
        return negociacoesDeHoje.filter(negociacaoDeHoje => {
          return !this.negociacoes
                  .lista()
                  .some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
        });
      })
      .then((negociacoesDeHoje: Negociacao[]) => {
        for(let negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao);
        }

        this.negociacoesView.update(this.negociacoes);
      });
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

