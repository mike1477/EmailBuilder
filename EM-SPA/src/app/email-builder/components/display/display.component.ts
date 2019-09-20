import { Component, OnInit } from '@angular/core';
import { Body } from 'src/app/shared/models/email/body';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Section } from '../../../shared/models/email/section';

@Component({
  selector: '[app-display]',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  emailTemplate: Body;

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
    this.emailTemplate.sections.splice(index, 1);
  }

  copyRow(row: Section) {
    var currentIdex = this.emailTemplate.sections.indexOf(row);
    var duplicateRow = Section.duplicate(row);
    this.emailTemplate.sections.splice(currentIdex, 0, duplicateRow);
  }

  deselectRow() {
    this.selectionManager.selectRow(null);
  }
}
