import { Injectable, EventEmitter } from '@angular/core';
import { EmailBody } from 'src/app/shared/models/email/body';
import { Section } from 'src/app/shared/models/email/section';
import { ElementBase } from 'src/app/shared/models/email/elements/elementBase';
import { Observable } from 'rxjs';
import { PropertyManager } from '../models/property-manager';
import { AppApiServiceService } from './app-api-service.service';

@Injectable({
  providedIn: 'root'
})

export class SelectionManagerService {

  public targetPropertyManger: PropertyManager<any> = null;
  private _emailTemplate: EmailBody = null;
  private _selectedRow: Section = null;
  private _selectedElement: ElementBase = null;

  rowSelectedEvent = new EventEmitter();
  elementSelectedEvent = new EventEmitter();

  get emailTemplate(): EmailBody {
    return this._emailTemplate;
  }
  get selectedRow(): Section {
    return this._selectedRow;
  };
  get selectedElement(): ElementBase {
    return this._selectedElement;
  };

  constructor(private api: AppApiServiceService) { }

  selectElement(element: ElementBase) {
    this._selectedElement = element;
    if (this._selectedElement) this.elementSelectedEvent.emit();
  }

  selectRow(row: Section) {
    this._selectedElement = null;
    this._selectedRow = row;
    if (this._selectedRow) this.rowSelectedEvent.emit();
  }

  private activeObservable: Observable<EmailBody> = null;

  private createBlankTemplate(): EmailBody {
    var blankEmailBody = EmailBody.create();
    var blankSection = Section.create([200, 200, 200]);
    blankEmailBody.sections.push(blankSection);
    return blankEmailBody;

  }

  loadEmailTemplate(): Observable<EmailBody> {
    var self = this;
    if (self._emailTemplate) {
      return new Observable<EmailBody>((observer) => {
        observer.next(self.emailTemplate);
        observer.complete();
        return { unsubscribe() { } };
      });
    }
    if (!self.activeObservable) {
      self.activeObservable = new Observable<EmailBody>((observer) => {
        self.api.getEmailTemplate().subscribe((template) => {
          self._emailTemplate = template ? EmailBody.duplicate(template) : self.createBlankTemplate();
          observer.next(this.emailTemplate);
          observer.complete();
          this.activeObservable = null;
        },
          observer.error,
          observer.complete);
        return { unsubscribe() { } };
      });
    }
    return this.activeObservable
  }

  save() {
    this.api.saveEmailTempate(this.emailTemplate);
  }
}
