import { View } from "./view.js";

export class MensagemView extends View<string> {

  protected template(msg: string): string {
    return `
      <p class="alert alert-info">${msg}</p>
    `;
  }
}