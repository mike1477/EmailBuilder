import { Padding } from '../padding';
import { AppStructureTypes } from '../app-stucture-types';
import { IStructureType } from '../i-structure-type';

export class ElementBase implements IStructureType {

    constructor();
    constructor(obj: ElementBase)
    constructor(obj?: any) {
        this.padding = obj ? new Padding(obj.padding) : new Padding();
        this.align = obj && obj.align || "center";
        this.widthInPercentage = obj && obj.widthInPercentage || 0;
        this.widthInPixels = obj && obj.widthInPixels || 0;
        this.autoWidth = obj && obj.autoWidth || false;
        this.backgroundColor = obj && obj.backgroundColor || "transparent";
    }
    padding: Padding;
    widthInPercentage: number;
    widthInPixels: number;
    align: string;
    autoWidth: boolean;
    backgroundColor: string;

    get appStuctureType(): AppStructureTypes {
        return AppStructureTypes.element;
    }

    get elementType(): string {
        if (this.hasOwnProperty("button")) return "button";
        if (this.hasOwnProperty("image")) return "image";
        if (this.hasOwnProperty("divider")) return "divider";
        if (this.hasOwnProperty("text")) return "text";
    }
}