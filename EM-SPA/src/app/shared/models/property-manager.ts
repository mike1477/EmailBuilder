import { ConditionDefinition } from './condition-definition';
import { PropertyManagerTypes } from './property-manager-types';

export class PropertyManger {
  constructor() {
    this.conditions = [];
  }
  defaultValue: any;
  managerType: PropertyManagerTypes;
  conditions: Array<ConditionDefinition>;
}
