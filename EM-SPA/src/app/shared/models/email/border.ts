import { BorderType } from './enums/borderType';

const defaultType = BorderType.SOLID;
const defaultThickness = 2;

export class Border {
    constructor();
    constructor(obj: Border);
    constructor(obj?: any) {
        this.type = obj && obj.type || defaultType;
        this.thickness = obj && obj.thickness || 0;
    }
    type: BorderType;
    thickness: number;

    static create(): Border {
        var newBorder = new Border();
        newBorder.thickness = defaultThickness;
        return newBorder;
    }

    static duplicate(obj: Border): Border {
        return new Border(obj);
    }
}