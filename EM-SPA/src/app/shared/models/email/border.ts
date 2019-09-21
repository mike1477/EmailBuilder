import { BorderType } from './enums/borderType';

const defaultStyle = BorderType.SOLID;
const defaultWidth = 1;
const defaultColor = "#000000";

export class Border {
    constructor();
    constructor(obj: Border);
    constructor(obj?: any) {
        this.style = obj && obj.style || defaultStyle;
        this.width = obj && obj.width || 0;
        this.color = obj && obj.color || defaultColor;
    }
    style: BorderType;
    width: number;
    color: string;

    static create(): Border {
        var newBorder = new Border();
        newBorder.width = defaultWidth;
        return newBorder;
    }

    static duplicate(obj: Border): Border {
        var newBorder = new Border(obj);
        if (!obj.width && obj.width !== 0) {
            newBorder.width = defaultWidth;
        }
        return newBorder;
    }
}