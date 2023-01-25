import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.msgView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.msgView.update("Apenas negociacoes em dias úteis são aceitas.");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFomulario();
        this.atualizaViews();
    }
    limparFomulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaViews() {
        this.negociacoesView.update(this.negociacoes);
        this.msgView.update('Negociação adicionada com sucesso');
    }
    ehDiaUtil(data) {
        return data.getDay() !== DiasDaSemana.SABADO && data.getDay() !== DiasDaSemana.DOMINGO;
    }
}
