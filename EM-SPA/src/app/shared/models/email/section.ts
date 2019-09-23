import { Column } from './column';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';
import { BackgroundImage } from './backgroundImage';

const defaultBackgroundColor = "transparent";
const defaultColumnDefinition = [100];

//TODO need to conditionally set property values to a property manager if applicable

export class Section implements IStructureType {

    constructor()
    constructor(obj: Array<number>)
    constructor(obj: Section)
    constructor(obj?: any) {
        if (obj instanceof Array) {
            this.backgroundColor = defaultBackgroundColor;
            this.contentBackgroundColor = defaultBackgroundColor;
            this.mobileStack = false;
            this.backgroundImage = new BackgroundImage();
            this.columns = obj.map(function (value: number, index: number) {
                return Column.create(value);
            });
        }
        else if (typeof obj === "object") {
            this.backgroundColor = obj && obj.backgroundColor || defaultBackgroundColor;
            this.contentBackgroundColor = obj && obj.contentBackgroundColor || defaultBackgroundColor;
            this.mobileStack = obj && obj.mobileStack || false;
            this.backgroundImage = BackgroundImage.duplicate(obj.backgroundColor);
            this.columns = obj.columns.map(function (value: Column, index: number) {
                return Column.duplicate(value);
            });
        }
        else {
            this.backgroundColor = defaultBackgroundColor;
            this.contentBackgroundColor = defaultBackgroundColor;
            this.mobileStack = false;
            this.backgroundImage = new BackgroundImage();
            this.columns = defaultColumnDefinition.map(function (value: number, index: number) {
                return Column.create(value);
            });
        }
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
        return new Section(row);
    }
}