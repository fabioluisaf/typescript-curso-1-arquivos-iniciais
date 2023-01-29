import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('.form');
if (formulario) {
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw Error("Não foi possível iniciar a aplicação, formulário inexistente.");
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        negociacaoController.importaDados();
    });
}
else {
    throw Error('#botao-importa nao foi encontrado.');
}
//# sourceMappingURL=app.js.map