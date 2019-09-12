import { Padding } from '../padding';
import { Alignment } from '../enums/alignment';

export class ElementBase{
    constructor(){
        this.padding = new Padding();
        this.align = "left";
        this.autoWidth = false;
        this.backgroundColor = "transparent";
    }
    padding: Padding;
    align: string;
    autoWidth: boolean;
    widthInPercentage:number;
    backgroundColor:string;
}