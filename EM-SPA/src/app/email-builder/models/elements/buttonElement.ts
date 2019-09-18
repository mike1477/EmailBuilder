import { ElementBase } from './elementBase';
import { Padding } from '../padding';

export class ButtonElement extends ElementBase {
    constructor() {
        super();
        this.button = {
            text: "This is the button",
            backgroundColor: "#C9C9C9",
            padding: new Padding(),
            textColor: "#ffffff"
        }
    }
    button: any;

    static create(): ButtonElement {
        return new ButtonElement;
    }

    static duplicate(button: ButtonElement): ButtonElement {
        var newElement = new ButtonElement();
        newElement.alignment = button.alignment;
        newElement.autoWidth = button.autoWidth;
        newElement.backgroundColor = button.backgroundColor;
        newElement.padding = Padding.duplicate(button.padding);
        newElement.widthInPercentage = button.widthInPercentage;
        newElement.button = JSON.parse(JSON.stringify(button.button));
        return newElement;
    }
}