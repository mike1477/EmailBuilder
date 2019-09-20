export class ConditionDefinition {
  constructor() { }
  operationModel: any;
  conditionValue: any;
  get isCompound(): boolean {
    return this.operationModel.operatorsAndOrGroups instanceof Array;
  }
  get isSimple(): boolean {
    return !this.isCompound;
  }
}