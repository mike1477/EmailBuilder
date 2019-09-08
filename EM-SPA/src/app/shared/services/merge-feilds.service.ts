import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription, Subject } from 'rxjs';
import { MergeField } from '../models/merge-field';

@Injectable({
  providedIn: 'root'
})
export class MergeFeildsService {

  private _mergeFields: MergeField[] = [];

  private _mergeFieldSorce: Observable<MergeField[]>;

  mergeFields:Subject<MergeField[]> = new Subject<MergeField[]>();

  constructor() {
    this._mergeFieldSorce = new Observable<MergeField[]>((observer)=>{
      observer.next(this._mergeFields);
      return {unsubscribe() {}};
    });
    this._mergeFieldSorce.subscribe(this.mergeFields);
  }

  addMergeField(newMergeField: MergeField):void{
    this._mergeFields.push(newMergeField);
    this.mergeFields.next(this._mergeFields);
  }
}
