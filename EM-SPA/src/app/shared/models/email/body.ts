import { Section } from './section';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';

const defaultBackgroundColor = "#ffffff";
const defaultWidthInPixels = 600;

export class EmailBody implements IStructureType {

    constructor()
    constructor(obj: EmailBody)
    constructor(obj?: any) {
        this.sections = obj && obj.sections instanceof Array ? obj.sections.map((item) => {
            return Section.duplicate(item);
        }) : [];
        this.backgroundColor = obj && obj.backgroundColor ? PropertyManagerColor.duplicate(obj.backgroundColor) : new PropertyManagerColor(defaultBackgroundColor);
        this.contentBackgroundColor = obj && obj.contentBackgroundColor ? PropertyManagerColor.duplicate(obj.contentBackgroundColor) : new PropertyManagerColor();
        this.contentWidthInPixels = obj && obj.contentWidthInPixels || defaultWidthInPixels;
    }
    title: string;
    backgroundColor: PropertyManagerColor;
    contentBackgroundColor: PropertyManagerColor;
    contentWidthInPixels: number;
    sections: Section[];

    get appStuctureType(): AppStructureTypes {
        return AppStructureTypes.body;
    }

    static create(): EmailBody {
        return new EmailBody();
    }

    static duplicate(obj: EmailBody): EmailBody {
        return new EmailBody(obj);
    }
}