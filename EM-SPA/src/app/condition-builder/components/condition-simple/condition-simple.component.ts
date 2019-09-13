import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { MergeField } from 'src/app/shared/models/merge-field';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';
import { ConditionPredicateService } from 'src/app/shared/services/condition-predicate.service';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-condition-simple',
  templateUrl: './condition-simple.component.html',
  styleUrls: ['./condition-simple.component.scss']
})
export class ConditionSimpleComponent implements OnInit, OnDestroy {
  private _predicateOptions:Array<any> = [];
  private subs:Subscription = new Subscription();

  @Input() condition:ConditionDefinition;
  @Output()
  removeSimpleConditionRequest = new EventEmitter<ConditionDefinition>();

  constructor(
    private mergeFieldService: MergeFieldsService,
    private conditionOperatorsService: ConditionPredicateService) { 
  }

  ngOnInit() { 
    let self = this;
    let oneComplete = false;
    this.subs.add(this.mergeFieldService.getMergeFields().subscribe(
      (mergeFields)=>{},
      (err)=>{}, //TODO handle error
      ()=>{
      if(oneComplete) self.loadPredicateOptions();
      oneComplete = true;
    }));

    this.subs.add(
      this.conditionOperatorsService.getConditionOperators().subscribe(
      (mergeFields)=>{},
      (err)=>{}, //TODO handle error
      ()=>{
        if(oneComplete) self.loadPredicateOptions();
        oneComplete = true;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadPredicateOptions(){
    let operators = this.conditionOperatorsService.conditionOperators;
    let mergeField = this.selectedMergeField;
    if(operators && mergeField && operators[mergeField.type]){
      this._predicateOptions = Object.keys(operators[mergeField.type]).map((item)=>{
        return {key:item, label:operators[mergeField.type][item]};
      });
    }
  }

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

    this.operationModel.targetField = newValue;

    //load up the predicate options for the merge field type
    this.loadPredicateOptions();
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

  removeSimpleCondition() {
    this.removeSimpleConditionRequest.emit(this.condition);
  }

}
