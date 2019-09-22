import { ConditionOperatorGroup } from './condition-operator-group';
import { ConditionOperator } from './condition-operator';

export class ConditionDefinition {

  constructor()
  constructor(obj: ConditionDefinition)
  constructor(obj?: any) {
    this.conditionValue = obj && obj.conditionValue;
    if (obj && obj.operationModel) {
      if (obj.isCompound === true) this.operationModel = ConditionOperatorGroup.duplicate(obj.operationModel);
      else this.operationModel = ConditionOperator.duplicate(obj.operationModel);
    }
  }

  operationModel: any;
  conditionValue: any;

  get isCompound(): boolean {
    return this.operationModel.operatorsAndOrGroups instanceof Array;
  }
  get isSimple(): boolean {
    return !this.isCompound;
  }

  static duplicate(obj: ConditionDefinition): ConditionDefinition {
    return new ConditionDefinition();
  }
}