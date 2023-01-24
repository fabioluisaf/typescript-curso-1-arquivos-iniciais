export abstract class View<T> {
  
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(dados: T): string;

  update(dados: T): void {
    const template = this.template(dados);
    this.elemento.innerHTML = template;
  }
}