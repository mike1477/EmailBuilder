import { ConditionDefinition } from './condition-definition';

export class PropertyManager<T> {
  constructor() {
    this.conditions = [];
  }
  defaultValue: T;
  conditions: Array<ConditionDefinition>;
}
