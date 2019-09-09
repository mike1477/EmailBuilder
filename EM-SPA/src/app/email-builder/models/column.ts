import { Padding } from './padding';
import { BorderDefinition } from './borderDefinition';
import { ElementBase } from './elements/elementBase';

export class Column{
    constructor(width:number){
        this.padding =new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.borderDefinition = this.borderDefinition = new BorderDefinition();
        this.elements = [];
        this.id = Math.floor((Math.random() * 1000000) + 1);
    }
    id: number;
    padding:Padding;
    backgroundColor:string;
    widthInPercentage:number;
    widthInPixels:number;
    borderDefinition: BorderDefinition;
    elements: Array<ElementBase>;
}