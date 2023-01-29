export class UnidadeDeTempo{
  public static readonly SEGUNDOS = new UnidadeDeTempo("segundos", 1000);
  public static readonly MILISEGUNDOS = new UnidadeDeTempo("milisegundos", 1);

  private constructor(
    public readonly unidade: string,
    public readonly divisor: number
  ) {}
}

