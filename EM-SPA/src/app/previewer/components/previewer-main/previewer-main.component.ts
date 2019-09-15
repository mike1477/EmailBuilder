import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';
import { MergeFeildEdit } from '../../models/merge-field-edit';

@Component({
  selector: 'app-previewer-main',
  templateUrl: './previewer-main.component.html',
  styleUrls: ['./previewer-main.component.scss']
})
export class PreviewerMainComponent implements OnInit {

  private _testData: Array<MergeFeildEdit>;

  constructor(
    private selectionManager: SelectionManagerService,
    private mergeFieldService: MergeFieldsService
  ) { }

  ngOnInit() {
    var self = this;
    this.mergeFieldService.getMergeFields().subscribe(
      (mergeFields) => {
        self._testData = mergeFields.map((item) => {
          return { field: item, value: null };
        });
      },
      (err) => { },  //TODO handle err
      () => { } //Complete
    );
    this.selectionManager.loadEmailTemplate().subscribe(
      (emailTemplate) => { },
      (err) => { },  //TODO handle err
      () => { } //Complete
    );
  }

  get data(): string {
    var returnValue = {};
    this.fieldOptions.forEach((item) => {
      returnValue[item.field.name] = item.value;
    });
    return JSON.stringify(returnValue);
  }

  get design(): string {
    return JSON.stringify(this.selectionManager.emailTemplate);
  }

  get fieldOptions(): Array<MergeFeildEdit> {
    return this._testData;
  }

}
