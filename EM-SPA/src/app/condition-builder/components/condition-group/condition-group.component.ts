import { Component, OnInit, Input } from '@angular/core';
import { ConditionGroup } from '../../../shared/models/condition-group';

@Component({
  selector: 'app-condition-group',
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition-group.component.scss']
})
export class ConditionGroupComponent implements OnInit {

  @Input() conditionGroup: ConditionGroup;

  constructor() { }

  ngOnInit() {
  }

}
