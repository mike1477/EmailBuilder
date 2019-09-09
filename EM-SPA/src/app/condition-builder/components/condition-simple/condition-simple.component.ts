import { Component, OnInit, Input } from '@angular/core';
import { ConditionOperator } from 'src/app/shared/models/condition-operator';

@Component({
  selector: 'app-condition-simple',
  templateUrl: './condition-simple.component.html',
  styleUrls: ['./condition-simple.component.scss']
})
export class ConditionSimpleComponent implements OnInit {

  @Input() operator: ConditionOperator

  constructor() { }

  ngOnInit() { }

}
