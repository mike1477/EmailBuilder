import { ElementBase } from './elementBase';
import { Padding } from '../padding';

export class TextElement extends ElementBase {
    constructor() {
        super();
        this.text = {
            content: "Enter your content here!"
        }
    }
    text: any;

    static create(): TextElement {
        return new TextElement;
    }

    static duplicate(text: TextElement): TextElement {
        var newElement = new TextElement();
        newElement.alignment = text.alignment;
        newElement.autoWidth = text.autoWidth;
        newElement.backgroundColor = text.backgroundColor;
        newElement.padding = Padding.duplicate(text.padding);
        newElement.widthInPercentage = text.widthInPercentage;
        newElement.text = JSON.parse(JSON.stringify(text.text));
        return newElement;
    }

}