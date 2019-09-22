import { PropertyManager } from './property-manager';
import { ConditionDefinition } from './condition-definition';

const defaultColor = "transparent"

export class PropertyManagerColor extends PropertyManager<string>{

    constructor(color?: string) {
        super();
        this.defaultValue = color || defaultColor;
    }

    static duplicate(obj: PropertyManagerColor): PropertyManagerColor {
        var newManager = new PropertyManagerColor(obj.defaultValue);
        newManager.conditions = obj.conditions.map((item) => {
            return ConditionDefinition.duplicate(item);
        });
        return newManager;
    }
}