import { ElementBase } from './elementBase';
import { Padding } from '../padding';

export class DividerElement extends ElementBase {
    constructor() {
        super();
        this.divider = {
            color: "#000000"
        };
    }
    divider: any;

    static create(): DividerElement {
        return new DividerElement;
    }

    static duplicate(divider: DividerElement): DividerElement {
        var newElement = new DividerElement();
        newElement.alignment = divider.alignment;
        newElement.autoWidth = divider.autoWidth;
        newElement.backgroundColor = divider.backgroundColor;
        newElement.padding = Padding.duplicate(divider.padding);
        newElement.widthInPercentage = divider.widthInPercentage;
        newElement.divider = JSON.parse(JSON.stringify(divider.divider));
        return newElement;
    }

}