export abstract class View<T> {
  private elemento: HTMLElement;

  public constructor(seletor: string) {
    const elemento = document.querySelector(seletor); 

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM.`);
    }
  }
  
  protected abstract template(dados: T): string;

  public update(dados: T): void {
    let template = this.template(dados);
    this.elemento.innerHTML = template;
  }
}