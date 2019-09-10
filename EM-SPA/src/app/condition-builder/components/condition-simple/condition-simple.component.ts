import { Component, OnInit, Input } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';

@Component({
  selector: 'app-condition-simple',
  templateUrl: './condition-simple.component.html',
  styleUrls: ['./condition-simple.component.scss']
})
export class ConditionSimpleComponent implements OnInit {

  @Input() condition:ConditionDefinition;

  constructor() { }

  ngOnInit() { }

}
