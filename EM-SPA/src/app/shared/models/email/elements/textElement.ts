import { ElementBase } from './elementBase';

const defaultWidthInPercentage = 100;
const defaultContent = "Enter your content here!";
const defaultColor = "#000000";

export class TextElement extends ElementBase {

    constructor();
    constructor(obj: TextElement);
    constructor(obj?: any) {
        if (obj) super(obj);
        else super();

        var text = obj && obj.text || {};
        this.text = {
            content: text.content || defaultContent,
            color: text.color || defaultColor
        }
    }
    text: any;

    static create(): TextElement {
        var newText = new TextElement();
        newText.widthInPercentage = defaultWidthInPercentage;
        return newText;
    }

    static duplicate(text: TextElement): TextElement {
        return new TextElement(text);
    }

}