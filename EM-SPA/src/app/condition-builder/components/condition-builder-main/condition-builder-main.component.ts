import { Component, OnInit } from '@angular/core';
import { PropertyManger } from '../../../shared/models/property-manager';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { ConditionOperatorGroup } from 'src/app/shared/models/condition-operator-group';

@Component({
  selector: 'app-condition-builder-main',
  templateUrl: './condition-builder-main.component.html',
  styleUrls: ['./condition-builder-main.component.scss']
})
export class ConditionBuilderMainComponent implements OnInit {

  propertyManger: PropertyManger = new PropertyManger();

  constructor() { }

  ngOnInit() {
  }

  addSimple() {
    var condition = new ConditionDefinition();
    condition.operationModel = new ConditionOperator();
    condition.conditionValue = "Simple Condition";
    this.propertyManger.conditions.push(condition);
  }

  addCompound() {
    var condition = new ConditionDefinition();
    condition.operationModel = new ConditionOperatorGroup();
    condition.conditionValue = "Compound Condition";
    this.propertyManger.conditions.push(condition);
  }
}
