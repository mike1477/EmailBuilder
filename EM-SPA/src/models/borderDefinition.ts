import { Border } from './border';

export class BorderDefinition{
    constructor(){
        this.top = new Border();
        this.right = new Border();
        this.bottom = new Border();
        this.left = new Border();
    }
    top:Border;
    right: Border;
    bottom:Border;
    left:Border;
}