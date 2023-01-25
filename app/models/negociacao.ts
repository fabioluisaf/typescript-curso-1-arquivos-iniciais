export class Negociacao {
  public constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  public get data(): Date {
    const dataProxy = new Date(this._data.getTime());
    return dataProxy;
  }

  public static criaDe(dataString: string, qtdString: string, valString: string): Negociacao {
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ','));
    const qtd = parseInt(qtdString);
    const val = parseFloat(valString);

    return new Negociacao(data, qtd, val);
  }
}
