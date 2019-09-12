import { Injectable } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { Row } from 'src/app/email-builder/models/row';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';
import { Observable, Subject } from 'rxjs';
import { PropertyManager } from '../models/property-manager';
import { PropertyManagerColor } from '../models/property-manager-color';

@Injectable({
  providedIn: 'root'
})

export class SelectionManagerService {

  public targetPropertyManger:PropertyManager<any> = null;
  private _emailTemplate:Email = null;
  private _selectedRow: Row = null;
  private _selectedElement: ElementBase = null;  
  
  get emailTemplate(): Email{
    return this._emailTemplate;
  }
  get selectedRow(): Row{
    return this._selectedRow
  };
  get selectedElement(): ElementBase{
    return this._selectedElement;
  };

  constructor() { }

  selectElement(element:ElementBase){
    this._selectedElement = element;
  }

  selectRow(row:Row){
    this._selectedElement = null;
    this._selectedRow = row;
  }

  private activeObservable:Observable<Email> = null;

  loadEmailTemplate():Observable<Email>{
    if(this._emailTemplate){
      return new Observable<Email>((observer)=>{
        observer.next(this.emailTemplate);
        observer.complete();
        return {unsubscribe(){}};
      });
    }
    if(!this.activeObservable){
      this.activeObservable = new Observable<Email>((observer)=>{
        
        this._emailTemplate = new Email();
        this._emailTemplate.backgroundColor = new PropertyManagerColor();
        this._emailTemplate.backgroundColor.defaultValue = "#ffffff";
        this._emailTemplate.contentBackgroundColor = new PropertyManagerColor();
        this._emailTemplate.rows = [];
        
        observer.next(this._emailTemplate);
        observer.complete();
        this.activeObservable = null;
        return{unsubscribe(){}};
      });
    }

    return this.activeObservable
  }
}
