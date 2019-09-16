import { ElementBase } from './elementBase';

export class DividerElement extends ElementBase {
    constructor() {
        super();
        this.divider = {
            color: "#000000"
        };
    }
    divider: any
}