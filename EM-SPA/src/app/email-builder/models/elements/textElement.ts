import { ElementBase } from './elementBase';

export class TextElement extends ElementBase {
    constructor() {
        super();
        this.text = {
            content: "Enter your content here!",
            color: "#000000"
        }
    }
    text: any
}