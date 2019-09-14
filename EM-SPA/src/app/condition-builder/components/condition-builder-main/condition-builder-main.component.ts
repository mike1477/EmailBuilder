import { Component, OnInit } from '@angular/core';
import { PropertyManager } from '../../../shared/models/property-manager';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { ConditionOperatorGroup } from 'src/app/shared/models/condition-operator-group';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfigurationService } from 'src/app/shared/services/app-configuration.service';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition-builder-main',
  templateUrl: './condition-builder-main.component.html',
  styleUrls: ['./condition-builder-main.component.scss']
})
export class ConditionBuilderMainComponent implements OnInit {

  propertyManger: PropertyManager<any> = null;

  constructor(
    private modalService: NgbModal,
    private config: AppConfigurationService,
    private selectionManagerService: SelectionManagerService,
    private router: Router   ) { }

  ngOnInit() {
    this.propertyManger = this.selectionManagerService.targetPropertyManger;
    //Go to the home page if there is no property to manage
    if(!this.propertyManger) this.router.navigateByUrl("/");
  }

  get defaultValue():string{
    return this.propertyManger && this.propertyManger.defaultValue;
  }
  set defaultValue(newValue:string){
    if(this.propertyManger) this.propertyManger.defaultValue = newValue;
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

  removeSimpleCondition(target){
    let conditions = this.propertyManger.conditions;
    conditions.splice(conditions.indexOf(target), 1);
  }

  
  editMergeField(content) {
    this.modalService.open(content, this.config.MERGE_FIELD_MODAL_CONGIG).result.then(()=>{}, ()=>{});
  }
}
