import { Padding } from './padding';
import { BorderDefinition } from './borderDefinition';
import { ElementBase } from './element/elementBase';

export class Column{
    constructor(width:number){
        this.padding =new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.borderDefinition = this.borderDefinition = new BorderDefinition();
        this.elements = [];
    }
    padding:Padding;
    backgroundColor:string;
    widthInPercentage:number;
    widthInPixels:number;
    borderDefinition: BorderDefinition;
    elements: Array<ElementBase>;
}