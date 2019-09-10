import { Component, OnInit, Input } from '@angular/core';
import { ConditionDefinition } from 'src/app/shared/models/condition-definition';

@Component({
  selector: 'app-condition-compound',
  templateUrl: './condition-compound.component.html',
  styleUrls: ['./condition-compound.component.scss']
})
export class ConditionCompoundComponent implements OnInit {
  
  @Input() condition:ConditionDefinition;
  
  constructor() { }

  ngOnInit() {
  }

}
