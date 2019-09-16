import { ElementBase } from './elementBase';
import { Padding } from '../padding';

export class ButtonElement extends ElementBase {
    constructor() {
        super();
        this.button = {
            text: "This is the button",
            backgroundColor: "#59bd5d",
            padding: new Padding(),
            textColor: "#000000"
        }
    }
    button: any
}