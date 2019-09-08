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
  
  private _emailTemplateSource:Observable<Email>;
  private _selectedRowSource: Observable<Row>;
  private _selectedElementSource: Observable<ElementBase>;

  emailTemplate:Subject<Email> = new Subject<Email>();
  selectedRow: Subject<Row> = new Subject<Row>();
  selectedElement: Subject<ElementBase> = new Subject<ElementBase>();

  constructor() { 
   
    this._emailTemplateSource = new Observable<Email>((observer)=>{
      //observer.next(this._emailTemplate);
      return {unsubscribe(){}};
    });
    this._emailTemplateSource.subscribe(this.emailTemplate);

    this._selectedRowSource = new Observable<Row>((observer)=>{
      //observer.next(this._selectedRow);
      return {unsubscribe(){}};
    });
    this._selectedRowSource.subscribe(this.selectedRow);

    this._selectedElementSource = new Observable<ElementBase>((observer)=>{
      //observer.next(this._selectedElement);
      return {unsubscribe(){}};
    });
    this._selectedElementSource.subscribe(this.selectedElement);

  }

  selectElement(element:ElementBase){
    this._selectedElement = element;
    this.selectedElement.next(this._selectedElement);
  }

  selectRow(row:Row){
    this._selectedElement = null;
    this._selectedRow = row;
    this.selectedRow.next(this._selectedRow);
    this.emailTemplate.next(this._emailTemplate);

  }

  loadEmailTemplate(){
    if(!this._emailTemplate){
      this._emailTemplate = new Email();
      this._emailTemplate.backgroundColor = "#ffffff";
      this._emailTemplate.contentBackgroundColor = "transparent";
      this._emailTemplate.rows = [];
    }

    this.emailTemplate.next(this._emailTemplate);
    this.selectedElement.next(this._selectedElement);
    this.selectedRow.next(this._selectedRow);

  }
}
