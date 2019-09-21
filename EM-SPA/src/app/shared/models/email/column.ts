import { Padding } from './padding';
import { ElementBase } from './elements/elementBase';
import { ButtonElement } from './elements/buttonElement';
import { DividerElement } from './elements/dividerElement';
import { ImageElement } from './elements/imageElement';
import { TextElement } from './elements/textElement';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';

export class Column implements IStructureType {
    constructor(width: number) {
        this.padding = new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.elements = [];
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
        var newColumn = new Column(column.widthInPixels);
        newColumn.backgroundColor = column.backgroundColor;
        newColumn.padding = Padding.duplicate(column.padding);
        newColumn.widthInPercentage = column.widthInPercentage;
        newColumn.elements = column.elements.map((el) => {
            if (el.hasOwnProperty("button")) return ButtonElement.duplicate(el as ButtonElement);
            if (el.hasOwnProperty("divider")) return DividerElement.duplicate(el as DividerElement);
            if (el.hasOwnProperty("image")) return ImageElement.duplicate(el as ImageElement);
            if (el.hasOwnProperty("text")) return TextElement.duplicate(el as TextElement);
            return new ElementBase();
        });
        return newColumn;
    }
}