import { Padding } from '../padding';
import { Alignment } from '../enums/alignment';
import { Dimensions } from '../dimensions';
import { DividerElement } from './dividerElement';

export class ElementBase{
    constructor(){
        this.padding = new Padding();
        this.dimensions = new Dimensions();
        this.align = "left";
        this.autoWidth = false;
        this.backgroundColor = "transparent";
    }
    padding: Padding;
    dimensions: Dimensions;
    align: string;
    autoWidth: boolean;
    backgroundColor:string;
}