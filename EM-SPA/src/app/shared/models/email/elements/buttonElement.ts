import { ElementBase } from './elementBase';
import { Padding } from '../padding';

const defaultWidthInPercentage = 100;
const defaultText = "Call To Action";
const defaultBackgroundColor = "#C9C9C9";
const defaultColor = "#ffffff"

export class ButtonElement extends ElementBase {

    constructor();
    constructor(obj: ButtonElement);
    constructor(obj?: any) {
        if (obj) super(obj);
        else super();
        var btn = obj && obj.button || {};
        this.button = {
            text: btn.text || defaultText,
            backgroundColor: btn.backgroundColor || defaultBackgroundColor,
            padding: btn.padding ? new Padding(btn.padding) : new Padding(),
            textColor: btn && btn.textColor || defaultColor
        }
    }
    button: any;

    static create(): ButtonElement {
        var newButton = new ButtonElement();
        newButton.widthInPercentage = defaultWidthInPercentage;
        return newButton;
    }

    static duplicate(button: ButtonElement): ButtonElement {
        return new ButtonElement(button);
    }
}