import { Component, OnInit, Input } from '@angular/core';
import { MergeFeildEdit } from '../../models/merge-field-edit';

@Component({
  selector: 'app-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.scss']
})
export class FieldEditorComponent implements OnInit {

  @Input() fieldItem: MergeFeildEdit;

  constructor() { }

  get fieldValue(): string {
    return this.fieldItem.value;
  }

  set fieldValue(newValue: string) {
    this.fieldItem.value = newValue;
  }

  ngOnInit() {
  }

  onChange(evt) {
    this.fieldValue = evt.target.value;
  }
}
