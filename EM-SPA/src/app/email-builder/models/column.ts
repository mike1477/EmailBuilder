import { Padding } from './padding';
import { ElementBase } from './elements/elementBase';

export class Column {
    constructor(width: number) {
        this.padding = new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.elements = [];
        this.id = Math.floor((Math.random() * 1000000) + 1);
    }
    id: number;
    padding: Padding;
    backgroundColor: string;
    widthInPercentage: number;
    widthInPixels: number;
    elements: Array<ElementBase>;
}