import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MergeField } from 'src/app/shared/models/merge-field';
import { VariableTypes } from 'src/app/shared/models/variable-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-field-manager',
  templateUrl: './merge-field-manager.component.html',
  styleUrls: ['./merge-field-manager.component.scss']
})
export class MergeFieldManagerComponent implements OnInit, OnDestroy {

  @Input() modal: any;

  private subs: Subscription = new Subscription();
  public busy: boolean = false;
  private _selectedMergeField: MergeField;
  private _variableTypeOptions: Array<string>;
  private _editedMergeField: MergeField = new MergeField();

  constructor(
    public activeModal: NgbActiveModal,
    private mergeFieldService: MergeFieldsService) {
  }

  ngOnInit() {
    this._variableTypeOptions = Object.keys(VariableTypes).map((value) => {
      return value;
    });

    this.subs.add(this.mergeFieldService.getMergeFields().subscribe(
      (mergeFields) => { },
      (err) => { },  //TODO handle err
      () => { }));    //Complete
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get selectedMergeField(): MergeField {
    return this._selectedMergeField;
  }

  set selectedMergeField(newValue: MergeField) {
    this._editedMergeField = JSON.parse(JSON.stringify(newValue));
    this._selectedMergeField = newValue;
  }

  get mergeFields() {
    return this.mergeFieldService.mergeFields;
  }

  get variableTypeOptions(): Array<string> {
    return this._variableTypeOptions;
  }

  get variableNameEditField(): string {
    return this._editedMergeField.name;
  }

  set variableNameEditField(newValue: string) {
    if (newValue) this._editedMergeField.type = this._editedMergeField.type || VariableTypes.string;
    this._editedMergeField.name = newValue;
  }

  get selectedMergeFieldType(): VariableTypes {
    return this._editedMergeField.type;
  }

  set selectedMergeFieldType(newValue: VariableTypes) {
    this._editedMergeField.type = newValue;
  }

  submitChanges() {
    let self = this;
    let subscription;
    self.busy = true;
    if (self._selectedMergeField) {
      subscription = self.mergeFieldService.updateMergeField(self._selectedMergeField, self.variableNameEditField, self.selectedMergeFieldType)
        .subscribe(null,
          (err) => {
            self.busy = false;
            console.log("handle error");
          },
          () => {
            self._selectedMergeField = null;
            self._editedMergeField = new MergeField();
            self.busy = false;
          });
    }
    else {
      subscription = this.mergeFieldService.addMergeField(this._editedMergeField)
        .subscribe(null,
          (err) => {
            self.busy = false;
            console.log("handle error");
          },
          () => {
            self._selectedMergeField = null;
            self._editedMergeField = new MergeField();
            self.busy = false;
          });
    }
    this.subs.add(subscription);
  }

  deleteMergeField(mergeField: MergeField) {
    let self = this;
    let subscription = this.mergeFieldService.deleteMergeField(mergeField)
      .subscribe(null,
        (err) => {
          self.busy = false;
          console.log("handle error");
        },
        () => {
          self._selectedMergeField = null;
          self._editedMergeField = new MergeField();
          self.busy = false;
        });
    this.subs.add(subscription)
  }
}
