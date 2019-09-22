import { MergeField } from './merge-field';

export class ConditionOperator {

  constructor()
  constructor(obj: ConditionOperator)
  constructor(obj?: any) {
    this.predicateKey = obj && obj.predicateKey;
    this.valueOperand = obj && obj.valueOperand;
    if (obj && obj.targetField) this.targetField = MergeField.duplicate(obj.MergeField);
  }
  targetField: MergeField;
  predicateKey: string;
  valueOperand: string;

  static duplicate(obj: ConditionOperator): ConditionOperator {
    return new ConditionOperator(obj);
  }
}
