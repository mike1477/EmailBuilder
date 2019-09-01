import { BorderType } from './eums/borderType';

export class Border{
    constructor(){
        this.type = BorderType.SOLID;
        this.widthInPixels = 0;
    }
    type:BorderType;
    widthInPixels:number;
}