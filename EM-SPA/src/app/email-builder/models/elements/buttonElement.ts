import { ElementBase } from './elementBase';

export class ButtonElement extends ElementBase{
    constructor(){
        super();
        this.test = "This is the button"
    }
    test:string;
}