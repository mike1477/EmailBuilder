import { Injectable, EventEmitter } from '@angular/core';
import { Body } from 'src/app/shared/models/email/body';
import { Section } from 'src/app/shared/models/email/section';
import { ElementBase } from 'src/app/shared/models/email/elements/elementBase';
import { Observable } from 'rxjs';
import { PropertyManager } from '../models/property-manager';
import { PropertyManagerColor } from '../models/property-manager-color';
import { ButtonElement } from 'src/app/shared/models/email/elements/buttonElement';
import { DividerElement } from 'src/app/shared/models/email/elements/dividerElement';
import { TextElement } from 'src/app/shared/models/email/elements/textElement';
import { ImageElement } from 'src/app/shared/models/email/elements/imageElement';

@Injectable({
  providedIn: 'root'
})

export class SelectionManagerService {

  public targetPropertyManger: PropertyManager<any> = null;
  private _emailTemplate: Body = null;
  private _selectedRow: Section = null;
  private _selectedElement: ElementBase = null;

  rowSelectedEvent = new EventEmitter();
  elementSelectedEvent = new EventEmitter();

  get emailTemplate(): Body {
    return this._emailTemplate;
  }
  get selectedRow(): Section {
    return this._selectedRow;
  };
  get selectedElement(): ElementBase {
    return this._selectedElement;
  };

  constructor() { }

  selectElement(element: ElementBase) {
    this._selectedElement = element;
    if (this._selectedElement) this.elementSelectedEvent.emit();
  }

  selectRow(row: Section) {
    this._selectedElement = null;
    this._selectedRow = row;
    if (this._selectedRow) this.rowSelectedEvent.emit();
  }

  private activeObservable: Observable<Body> = null;

  loadEmailTemplate(): Observable<Body> {
    if (this._emailTemplate) {
      return new Observable<Body>((observer) => {
        observer.next(this.emailTemplate);
        observer.complete();
        return { unsubscribe() { } };
      });
    }
    if (!this.activeObservable) {
      this.activeObservable = new Observable<Body>((observer) => {

        this._emailTemplate = new Body();
        this._emailTemplate.backgroundColor = new PropertyManagerColor();
        this._emailTemplate.backgroundColor.defaultValue = "#ffffff";
        this._emailTemplate.contentBackgroundColor = new PropertyManagerColor();

        //Adding elements for developmnet purposes
        var newRow = Section.create([200, 200, 200]);

        newRow.columns[1].elements.push(ButtonElement.create());
        newRow.columns[1].elements.push(DividerElement.create());
        newRow.columns[1].elements.push(TextElement.create());
        newRow.columns[1].elements.push(ImageElement.create());

        this._emailTemplate.sections = [newRow];
        console.log(this._emailTemplate);

        observer.next(this._emailTemplate);
        observer.complete();
        this.activeObservable = null;
        return { unsubscribe() { } };
      });
    }

    return this.activeObservable
  }
}
