import { ElementBase } from './elementBase';

export class ButtonElement extends ElementBase {
    constructor() {
        super();
        this.button = {
            text: "This is the button"
        }
    }
    button: any
}