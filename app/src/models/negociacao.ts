import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  public constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  public static criaDe(dataString: string, qtdString: string, valString: string): Negociacao {
    const capturaHifen = /-/g;
    const data = new Date(dataString.replace(capturaHifen, ','));
    const qunatidade = parseInt(qtdString);
    const valor = parseFloat(valString);

    return new Negociacao(data, qunatidade, valor);
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  public get data(): Date {
    const dataProxy = new Date(this._data.getTime());
    return dataProxy;
  }

  public paraTexto(): string {
    return `
    Data: ${this.data},
    Quantidade: ${this.quantidade},
    Valor: ${this.valor}
    `;
  }

  public ehIgual(outraNegociacao: Negociacao): boolean {
    return this.data.getDate() === outraNegociacao.data.getDate()
        && this.data.getMonth() === outraNegociacao.data.getMonth()
        && this.data.getFullYear() === outraNegociacao.data.getFullYear();
  }
}
