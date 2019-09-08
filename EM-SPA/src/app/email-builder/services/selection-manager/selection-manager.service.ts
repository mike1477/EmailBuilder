import { Injectable } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { Row } from 'src/app/email-builder/models/row';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectionManagerService {

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

  constructor() { 

  }

  selectElement(element:ElementBase){
    this._selectedElement = element;
  }

  selectRow(row:Row){
    this._selectedElement = null;
    this._selectedRow = row;
  }

  private activeObservable:Observable<Email> = null;

  loadEmailTemplate():Observable<Email>{
    if(!this.activeObservable){
      this.activeObservable =new Observable<Email>((observer)=>{
        
        this._emailTemplate = new Email();
        this._emailTemplate.backgroundColor = "#ffffff";
        this._emailTemplate.contentBackgroundColor = "transparent";
        this._emailTemplate.rows = [];
        
        observer.next(this._emailTemplate);
        return{unsubscribe(){}};
      });
    }

    return this.activeObservable

  }
}
