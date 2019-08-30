import { Column } from './column';

export class Row{
    backgroundColor:string;
    contentBackgroundColor:string;
    mobileStack:boolean;
    columns: Column[];
}