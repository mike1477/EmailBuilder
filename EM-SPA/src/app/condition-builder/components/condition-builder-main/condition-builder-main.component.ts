import { Component, OnInit } from '@angular/core';
import { PropertyManger } from '../../../shared/models/property-manager';

@Component({
  selector: 'app-condition-builder-main',
  templateUrl: './condition-builder-main.component.html',
  styleUrls: ['./condition-builder-main.component.scss']
})
export class ConditionBuilderMainComponent implements OnInit {

  propertyManger: PropertyManger = new PropertyManger();

  constructor() { }

  ngOnInit() {
  }

}
