import { Padding } from './padding';
import { ElementBase } from './elements/elementBase';
import { ButtonElement } from './elements/buttonElement';
import { DividerElement } from './elements/dividerElement';
import { ImageElement } from './elements/imageElement';
import { TextElement } from './elements/textElement';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';

const defaultBackgroundColor = "transparent";
const defaultWidthInPercentage = 100;

export class Column implements IStructureType {

    constructor()
    constructor(obj: number)
    constructor(obj: Column)
    constructor(obj?: any) {

        if (typeof obj === "number") {
            this.padding = Padding.create();
            this.backgroundColor = defaultBackgroundColor;
            this.widthInPixels = obj;
            this.elements = [];
        }
        else if (typeof obj === "object") {
            this.padding = Padding.duplicate(obj.padding);
            this.backgroundColor = obj && obj.backgroundColor || defaultBackgroundColor;
            this.widthInPercentage = obj && obj.widthInPercentage;
            this.widthInPixels = obj && obj.widthInPixels;
            this.elements = obj.elements.map((el) => {
                if (el.hasOwnProperty("button")) return ButtonElement.duplicate(el as ButtonElement);
                if (el.hasOwnProperty("divider")) return DividerElement.duplicate(el as DividerElement);
                if (el.hasOwnProperty("image")) return ImageElement.duplicate(el as ImageElement);
                if (el.hasOwnProperty("text")) return TextElement.duplicate(el as TextElement);
                return new ElementBase();
            });
        }
        else {
            this.padding = Padding.create();
            this.backgroundColor = defaultBackgroundColor;
            this.widthInPercentage = defaultWidthInPercentage;
            this.elements = [];
        }
    }
    padding: Padding;
    backgroundColor: string;
    widthInPercentage: number;
    widthInPixels: number;
    elements: Array<ElementBase>;

    get appStuctureType(): AppStructureTypes {
        return AppStructureTypes.column;
    }

    static create(width: number): Column {
        return new Column(width);
    }

    static duplicate(column: Column): Column {
        return new Column(column);
    }
}