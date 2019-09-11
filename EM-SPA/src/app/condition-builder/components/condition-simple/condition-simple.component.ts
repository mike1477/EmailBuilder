import { Component, OnInit, Input } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';
import { MergeField } from 'src/app/shared/models/merge-field';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';

@Component({
  selector: 'app-condition-simple',
  templateUrl: './condition-simple.component.html',
  styleUrls: ['./condition-simple.component.scss']
})
export class ConditionSimpleComponent implements OnInit {

  @Input() condition:ConditionDefinition;

  selectedMergeField:MergeField = null;

  get mergeFields(): Array<MergeField>{
    return this.mergeFieldService.mergeFields;
  }

  constructor(
    private mergeFieldService: MergeFieldsService) { 
  }

  ngOnInit() { 
    this.mergeFieldService.getMerdeFields().subscribe(
      (mergeFields)=>{},
      (err)=>{}, //TODO handle error
      ()=>{});
  }
}
