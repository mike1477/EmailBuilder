import { Padding } from './padding';
import { BorderDefinition } from './borderDefinition';

export class Column{
    constructor(width:number){
        this.padding =new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.borderDefinition = this.borderDefinition = new BorderDefinition();
    }
    padding:Padding;
    backgroundColor:string;
    widthInPercentage:number;
    widthInPixels:number;
    borderDefinition: BorderDefinition;
}