import { Component, OnInit, Input } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';

@Component({
  selector: 'app-condition-handler',
  templateUrl: './condition-handler.component.html',
  styleUrls: ['./condition-handler.component.scss']
})
export class ConditionHandlerComponent implements OnInit {

@Input() condition:ConditionDefinition;

  constructor() { }

  ngOnInit() {
  }

}
