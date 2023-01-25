export abstract class View<T> {
  private elemento: HTMLElement;
  private escapar = false;

  public constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor); 

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM.`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(dados: T): string;

  public update(dados: T): void {
    let template = this.template(dados);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }
}