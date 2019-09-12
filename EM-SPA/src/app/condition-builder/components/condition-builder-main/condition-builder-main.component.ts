import { Component, OnInit } from '@angular/core';
import { PropertyManger } from '../../../shared/models/property-manager';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { ConditionOperatorGroup } from 'src/app/shared/models/condition-operator-group';
import { PropertyManagerTypes } from 'src/app/shared/models/property-manager-types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfigurationService } from 'src/app/shared/services/app-configuration.service';

@Component({
  selector: 'app-condition-builder-main',
  templateUrl: './condition-builder-main.component.html',
  styleUrls: ['./condition-builder-main.component.scss']
})
export class ConditionBuilderMainComponent implements OnInit {

  propertyManger: PropertyManger = new PropertyManger();

  constructor(
    private modalService: NgbModal,
    private config: AppConfigurationService,  ) { }

  ngOnInit() {
    this.propertyManger.managerType = PropertyManagerTypes.color;
  }

  addSimple() {
    var condition = new ConditionDefinition();
    condition.operationModel = new ConditionOperator();
    condition.conditionValue = "Simple Condition";
    this.propertyManger.conditions.push(condition);
    console.log(this.propertyManger);
  }

  addCompound() {
    var condition = new ConditionDefinition();
    condition.operationModel = new ConditionOperatorGroup();
    condition.conditionValue = "Compound Condition";
    this.propertyManger.conditions.push(condition);
  }

  
  editMergeField(content) {
    this.modalService.open(content, this.config.MERGE_FIELD_MODAL_CONGIG).result.then(()=>{}, ()=>{});
  }
}
