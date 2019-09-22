import { Column } from './column';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';
import { BackgroundImage } from './backgroundImage';

export class Section implements IStructureType {

    constructor(columnDefinition: Array<number>) {
        this.backgroundColor = "transparent";
        this.contentBackgroundColor = "transparent";
        this.mobileStack = false;
        this.backgroundImage = new BackgroundImage();
        this.columns = columnDefinition ? columnDefinition.map(function (value: number, index: number) {
            return new Column(value);
        }) : [];
    }
    backgroundColor: string;
    backgroundImage: BackgroundImage;
    contentBackgroundColor: string;
    mobileStack: boolean;
    columns: Column[];

    get appStuctureType(): AppStructureTypes {
        return AppStructureTypes.section;
    }

    static create(columnDefinition: Array<number>): Section {
        return new Section(columnDefinition);
    }
    static duplicate(row: Section): Section {
        var newRow = new Section(null);
        newRow.backgroundColor = row.backgroundColor;
        newRow.contentBackgroundColor = row.contentBackgroundColor;
        newRow.mobileStack = row.mobileStack;
        newRow.backgroundImage = BackgroundImage.duplicate(row.backgroundImage);
        newRow.columns = row.columns.map((col) => {
            return Column.duplicate(col);
        });
        return newRow;
    }
}