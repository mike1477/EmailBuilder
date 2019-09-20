import { Section } from './section';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';
import { AppStructureTypes } from './app-stucture-types';
import { IStructureType } from './i-structure-type';

export class Body implements IStructureType {
    title: string;
    backgroundColor: PropertyManagerColor;
    contentBackgroundColor: PropertyManagerColor;
    contentWidthInPixels: number;
    sections: Section[];

    get appStuctureType(): AppStructureTypes {
        return AppStructureTypes.body;
    }
}