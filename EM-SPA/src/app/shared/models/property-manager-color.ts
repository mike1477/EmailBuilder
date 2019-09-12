import { PropertyManager } from './property-manager';

export class PropertyManagerColor extends PropertyManager<string>{
    constructor(){
        super();
        this.defaultValue = "transparent";
    }
}