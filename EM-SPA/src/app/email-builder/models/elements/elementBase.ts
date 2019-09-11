import { Padding } from '../padding';
import { Alignment } from '../enums/alignment';

export class ElementBase{
    constructor(){
        this.padding = new Padding();
    }
    padding: Padding;
    align: Alignment;
    autoWidth: boolean;
    widthInPercentage:number;
    backgroundColor:string;
}