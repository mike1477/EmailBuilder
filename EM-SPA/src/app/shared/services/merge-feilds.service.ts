import { Injectable } from '@angular/core';
import { MergeField } from '../models/merge-field';
import { VariableTypes } from '../models/variable-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MergeFeildsService {

  private _mergeFields: MergeField[] = null;

  get mergeFields(): MergeField[] {
    return this._mergeFields;
  }

  constructor() {}

  private activeObservable: Observable<MergeField[]> = null;

  getMerdeFields(): Observable<MergeField[]> {
    if (this.mergeFields instanceof Array) {
      return new Observable<MergeField[]>((observer) => {
        observer.next(this.mergeFields);
        observer.complete();
        return { unsubscribe() { } }
      });
    }
    if (!this.activeObservable) {
      this.activeObservable = new Observable<MergeField[]>((observer) => {
        //TODO use http
        this._mergeFields = [{name: "SampleMergeField", type: VariableTypes.string}]
        observer.next(this._mergeFields);
        observer.complete();
        this.activeObservable = null;
      });
    }
    return this.activeObservable;
  }

  addMergeField(newMergeField: MergeField): Observable<MergeField[]>{
    return new Observable<MergeField[]>((observer) => {
      this._mergeFields.push(newMergeField); //TODO this is http
      observer.next(this.mergeFields);
      observer.complete();
      return { unsubscribe(){ } }
    });
  }

}
