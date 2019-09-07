import { Column } from './column';

export class Row{
    constructor(columnDefinition:Array<number>){
        this.backgroundColor="transparent";
        this.contentBackgroundColor = "transparent";
        this.mobileStack = false;
        this.columns = columnDefinition.map(function(value:number, index:number){
            return new Column(value);
        });
    }
    backgroundColor:string;
    contentBackgroundColor:string;
    mobileStack:boolean;
    columns: Column[];
}