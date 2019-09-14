import { ElementBase } from './elementBase';

export class TextElement extends ElementBase{
    constructor(){
        super();
        this.content = "Enter your content here!"
    }
    content: string;
}