import { LinkTypes } from './link-types';

export class ConditionOperatorGroup {
  constructor() {
    this.operatorsAndOrGroups = [];
    this.linkType = LinkTypes.and;
  }
  linkType: LinkTypes;
  operatorsAndOrGroups: Array<any>;
}
