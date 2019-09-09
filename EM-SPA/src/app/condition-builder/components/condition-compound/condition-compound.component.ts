import { Component, OnInit, Input } from '@angular/core';
import { ConditionOperatorGroup } from 'src/app/shared/models/condition-operator-group';

@Component({
  selector: 'app-condition-compound',
  templateUrl: './condition-compound.component.html',
  styleUrls: ['./condition-compound.component.scss']
})
export class ConditionCompoundComponent implements OnInit {
  
  @Input() compoundDefinition: ConditionOperatorGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
