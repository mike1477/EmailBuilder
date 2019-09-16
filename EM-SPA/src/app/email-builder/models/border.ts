import { BorderType } from './enums/borderType';

export class Border {
    constructor() {
        this.type = BorderType.SOLID;
        // this.widthInPixels = 0;
        this.thickness = 1;
    }
    type: BorderType;
    // widthInPixels:number;
    thickness: number;
}