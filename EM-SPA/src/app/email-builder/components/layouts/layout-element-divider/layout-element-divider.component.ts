import { Component, OnInit, Input } from '@angular/core';
import { DividerElement } from 'src/app/email-builder/models/elements/dividerElement';

@Component({
  selector: '[app-layout-element-divider]',
  templateUrl: './layout-element-divider.component.html',
  styleUrls: ['./layout-element-divider.component.scss']
})
export class LayoutElementDividerComponent implements OnInit {
  @Input() element:DividerElement;
  constructor() { }

  ngOnInit() {
  }

}
