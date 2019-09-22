import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmailBody } from 'src/app/shared/models/email/body';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Section } from '../../../shared/models/email/section';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-display]',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  constructor(private selectionManager: SelectionManagerService) { }

  emailTemplate: EmailBody;

  ngOnInit() {
    this.subs.add(this.selectionManager.loadEmailTemplate().subscribe(
      (newValue) => { this.emailTemplate = newValue; console.log(newValue); },
      (err) => { /*TODO handle error */ },
      () => { /*TODO handle complete*/ }
    ));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
