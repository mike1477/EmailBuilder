import { Padding } from '../padding';
import { Alignment } from '../enums/alignment';

export class ElementBase{
    padding: Padding;
    align: Alignment;
    autoWidth: boolean;
    widthInPercentage:number;
    backgroundColor:string;
}