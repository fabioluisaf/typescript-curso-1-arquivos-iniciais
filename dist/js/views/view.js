export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(dados) {
        const template = this.template(dados);
        this.elemento.innerHTML = template;
    }
}
