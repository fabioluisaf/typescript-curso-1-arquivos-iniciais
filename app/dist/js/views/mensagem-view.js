import { View } from "./view.js";
export class MensagemView extends View {
    template(msg) {
        return `
      <p class="alert alert-info">${msg}</p>
    `;
    }
}
//# sourceMappingURL=mensagem-view.js.map