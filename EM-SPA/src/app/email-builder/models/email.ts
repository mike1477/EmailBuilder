import { Row } from './row';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';

export class Email{
    title:string;
    backgroundColor:PropertyManagerColor;
    contentBackgroundColor:PropertyManagerColor;
    contentWidthInPixels:number;
    rows:Row[];
}