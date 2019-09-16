import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Row } from '../../models/row';

@Component({
  selector: '[app-display]',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  emailTemplate: Email;

  ngOnInit() {
    this.selectionManager.loadEmailTemplate().subscribe(
      (newValue) => { this.emailTemplate = newValue; console.log(newValue); },
      (err) => { /*TODO handle error */ },
      () => { /*TODO handle complete*/ }
    );;
  }

  get selectedRow() {
    return this.selectionManager.selectedRow;
  }

  deleteRow(index: any) {
    this.emailTemplate.rows.splice(index, 1);
  }

  copyRow(row: Row) {
    var currentIdex = this.emailTemplate.rows.indexOf(row);
    var duplicateRow = Row.duplicate(row);
    this.emailTemplate.rows.splice(currentIdex, 0, duplicateRow);
  }

  deselectRow() {
    this.selectionManager.selectRow(null);
  }
}
