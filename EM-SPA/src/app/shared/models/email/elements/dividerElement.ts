import { ElementBase } from './elementBase';
import { Border } from '../border';

const defaultWidthInPercentage = 100;

export class DividerElement extends ElementBase {

    constructor();
    constructor(obj: DividerElement);
    constructor(obj?: any) {
        if (obj) super(obj);
        else super();
        var divider = obj && obj.divider || {}
        this.divider = Border.duplicate(divider);
    }
    divider: any;

    static create(): DividerElement {
        var newDivider = new DividerElement();
        newDivider.widthInPercentage = defaultWidthInPercentage;
        return newDivider;
    }

    static duplicate(divider: DividerElement): DividerElement {
        return new DividerElement(divider);
    }

}