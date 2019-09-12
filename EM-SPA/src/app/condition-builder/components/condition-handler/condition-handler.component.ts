import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';

@Component({
  selector: 'app-condition-handler',
  templateUrl: './condition-handler.component.html',
  styleUrls: ['./condition-handler.component.scss']
})
export class ConditionHandlerComponent implements OnInit {

@Input() condition:ConditionDefinition;
@Output()
removeSimpleConditionRequest = new EventEmitter<ConditionDefinition>();

removeSimpleCondition(target) {
  this.removeSimpleConditionRequest.emit(target);
}
constructor() { }

  ngOnInit() {
  }

}
