import { Injectable } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { Row } from 'src/app/email-builder/models/row';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';

@Injectable({
  providedIn: 'root'
})

export class SelectionManagerService {

  private _emailTemplate:Email = null;
  private _selectedRow: Row = null;
  private _selectedElement: ElementBase = null;

  constructor() { 
    this._emailTemplate = new Email();
    this._emailTemplate.backgroundColor = "#ffffff";
    this._emailTemplate.contentBackgroundColor = "transparent";
    this._emailTemplate.rows = [];
    console.log("test");
  }

  get emailBody():Email{
    return this._emailTemplate;
  }

  get selectedRow():Row{
    return this._selectedRow;
  }
  
  get selectedElement(): ElementBase{
    return this._selectedElement;
  }

  selectElement(element:ElementBase){
    this._selectedElement = element;
  }

  selectRow(row:Row){
    this._selectedElement = null;
    this._selectedRow = row;
  }

}
