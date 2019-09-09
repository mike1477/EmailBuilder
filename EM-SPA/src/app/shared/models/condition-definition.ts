import { ConditionOperatorGroup } from './condition-operator-group';
import { ConditionOperator } from './condition-operator';

export class ConditionDefinition {
  constructor() {}
  operationModel: any;
  conditionValue: any;
  get isCompound():boolean{
      return this.operationModel instanceof ConditionOperator;
  }
  get isSimple(): boolean{
      return this.operationModel instanceof ConditionOperatorGroup;
  }
}