import { Padding } from '../padding';

export class ElementBase {
    constructor() {
        this.padding = new Padding();
        this.alignment = "center";
        this.widthInPercentage = 100;
        this.autoWidth = false;
        this.backgroundColor = "transparent";
    }
    padding: Padding;
    widthInPercentage: number;
    alignment: string;
    autoWidth: boolean;
    backgroundColor: string;
}