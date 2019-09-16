import { Padding } from './padding';
import { ElementBase } from './elements/elementBase';
import { ButtonElement } from './elements/buttonElement';
import { DividerElement } from './elements/dividerElement';
import { ImageElement } from './elements/imageElement';
import { TextElement } from './elements/textElement';

export class Column {
    constructor(width: number) {
        this.padding = new Padding();
        this.backgroundColor = "transparent";
        this.widthInPixels = width;
        this.elements = [];
        this.id = Math.floor((Math.random() * 1000000) + 1);
    }
    id: number;
    padding: Padding;
    backgroundColor: string;
    widthInPercentage: number;
    widthInPixels: number;
    elements: Array<ElementBase>;

    static create(width: number): Column {
        return new Column(width);
    }

    static duplicate(column: Column): Column {
        var newColumn = new Column(column.widthInPixels);
        newColumn.backgroundColor = column.backgroundColor;
        newColumn.padding = Padding.duplicate(column.padding);
        newColumn.widthInPercentage = column.widthInPercentage;
        newColumn.elements = column.elements.map((el) => {
            if (el instanceof ButtonElement) return ButtonElement.duplicate(el);
            if (el instanceof DividerElement) return DividerElement.duplicate(el);
            if (el instanceof ImageElement) return ImageElement.duplicate(el);
            if (el instanceof TextElement) return TextElement.duplicate(el);
            return new ElementBase();
        });
        return newColumn;
    }
}