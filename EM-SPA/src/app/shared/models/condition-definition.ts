import { ConditionGroup } from './condition-group';

export class ConditionDefinition {
  constructor() {
    this.conditionGroups = [];
  }
  conditionGroups: Array<ConditionGroup>;
  valueWhenTrue: any;
}
