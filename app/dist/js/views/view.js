export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
    }
    update(dados) {
        let template = this.template(dados);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map