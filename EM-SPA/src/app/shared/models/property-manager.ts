import { ConditionDefinition } from './condition-definition';

export class PropertyManger {
  constructor() {
    this.conditions = [];
  }
  defaultValue: any;
  conditions: Array<ConditionDefinition>;
}
