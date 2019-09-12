import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConditionPedicateGroups } from '../models/condition-pedicate-group';

@Injectable({
  providedIn: 'root'
})
export class ConditionPredicateService {
  
  private  _conditionOperators:ConditionPedicateGroups = null;
  private _activeObservable: Observable<ConditionPedicateGroups> = null;

  get conditionOperators():ConditionPedicateGroups{
    return this._conditionOperators;
  }

  constructor() { }

  private generateConditionOperators():ConditionPedicateGroups{
    let conditionOperators = new ConditionPedicateGroups();
    conditionOperators.string = {
      startsWith: "starts with",
      startsWithIgnoreCase: "starts with (ignore case)",
      endsWith: "ends with",
      endsWithIgnoreCase: "ends with (ignore case)",
      contains: "contains",
      containsIgnoreCase: "contains (ignore case)",
      equals: "equals",
      equalsIgnoreCase: "equals (ignore case)"
    };
    conditionOperators.number = {
      isGreaterThan: "is greater than",
      isLessThan: "is less than",
      equals: "equals"
    };
    conditionOperators.boolean = {
      isTrue: "is true",
      isFalse: "is false"
    };
    conditionOperators.date = {
      isBefore: "is before",
      isAfter: "is after"
    };
    return conditionOperators;
  }

  getConditionOperators():Observable<ConditionPedicateGroups>{
    if(this._conditionOperators){
      return new Observable<ConditionPedicateGroups>((observer)=>{
        observer.next(this._conditionOperators);
        observer.complete();
        return {unsubscribe(){}}
      });
    }
    if(!this._activeObservable){
      this._activeObservable = new Observable<ConditionPedicateGroups>((observer)=>{
        this._conditionOperators = this.generateConditionOperators();//http me
        observer.next(this.conditionOperators);
        observer.complete();
        this._activeObservable = null;
        return {unsubscribe(){}}
      });
    }
    return this._activeObservable;
  }


}
