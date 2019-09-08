import { LinkTypes } from './link-types';
import { ConditionOperator } from './condition-operator';

export class ConditionGroup {
  constructor() {
    this.operators = [];
    this.contionGroups = [];
  }
  linkType: LinkTypes;
  operators: Array<ConditionOperator>;
  contionGroups: Array<ConditionGroup>;
}
