import { Component, OnInit, Input } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { MergeField } from 'src/app/shared/models/merge-field';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';
import { ConditionPredicateService } from 'src/app/shared/services/condition-predicate.service';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';

@Component({
  selector: 'app-condition-simple',
  templateUrl: './condition-simple.component.html',
  styleUrls: ['./condition-simple.component.scss']
})
export class ConditionSimpleComponent implements OnInit {

  private _predicateOptions:Array<any> = [];

  @Input() condition:ConditionDefinition;

  get operationModel():ConditionOperator{
    let isSimple = this.condition && this.condition.isSimple ? true : false;
    return isSimple ? this.condition && this.condition.operationModel : null;
  }

  get selectedMergeField():MergeField{
     return this.operationModel && this.operationModel.targetField;
  }

  set selectedMergeField(newValue:MergeField){
    if(!this.operationModel) return;
    
    //when a new mergefield is selected then a new predicate must be selected
    this.selectedPredicate = null; 

    //load up the predicate options for the merge field type
    let operators = this.conditionOperatorsService.conditionOperators;
    if(operators && operators[newValue.type]){
      this._predicateOptions = Object.keys(operators[newValue.type]).map((item)=>{
        return {key:item, label:operators[newValue.type][item]};
      });
    }
    this.operationModel.targetField = newValue;
  }

  get mergeFields(): Array<MergeField>{
    return this.mergeFieldService.mergeFields;
  }

  get predicateOptions():Array<any>{
    return this._predicateOptions;
  }

  get selectedPredicate(): string{
    return this.operationModel && this.operationModel.predicateKey;
  }
  set selectedPredicate(newValue:string){
    if(this.operationModel) this.operationModel.predicateKey = newValue;
  }

  get selectedVariableType():string{
    return this.selectedMergeField && this.selectedMergeField.type;
  }

  constructor(
    private mergeFieldService: MergeFieldsService,
    private conditionOperatorsService: ConditionPredicateService) { 
  }

  ngOnInit() { 
    this.mergeFieldService.getMergeFields().subscribe(
      (mergeFields)=>{},
      (err)=>{}, //TODO handle error
      ()=>{});

    this.conditionOperatorsService.getConditionOperators().subscribe(
      (mergeFields)=>{},
      (err)=>{}, //TODO handle error
      ()=>{});
  }
}
