import { Component, OnInit, Input } from '@angular/core';
import { DividerElement } from 'src/app/shared/models/email/elements/dividerElement';

@Component({
  selector: 'app-element-divider-manager',
  templateUrl: './element-divider-manager.component.html',
  styleUrls: ['./element-divider-manager.component.scss']
})
export class ElementDividerManagerComponent implements OnInit {

  @Input() element: DividerElement;

  constructor() { }

  ngOnInit() {
  }

}
