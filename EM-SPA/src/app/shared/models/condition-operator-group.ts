import { LinkTypes } from './link-types';
import { ConditionOperator } from './condition-operator';

export class ConditionOperatorGroup {

  constructor()
  constructor(obj: ConditionOperatorGroup)
  constructor(obj?: any) {
    this.linkType = obj && obj.linkType || LinkTypes.and;
    if (obj && obj.operatorsAndOrGroups instanceof Array) {
      this.operatorsAndOrGroups = obj.operatorsAndOrGroups.map((item) => {
        if (item.operatorsAndOrGroups instanceof Array) return ConditionOperatorGroup.duplicate(item);
        else return ConditionOperator.duplicate(item);
      });
    }
    else {
      this.operatorsAndOrGroups = [];
    }
  }
  linkType: LinkTypes;
  operatorsAndOrGroups: Array<any>;

  static duplicate(obj: ConditionOperatorGroup): ConditionOperatorGroup {
    return new ConditionOperatorGroup(obj);
  }
}
