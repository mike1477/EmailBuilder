import { ElementBase } from './elementBase';
import { Border } from '../border';

export class DividerElement extends ElementBase {
    constructor() {
        super();
        this.divider = {
            color: "#000000",
            border: new Border()
        };
    }
    divider: any
}