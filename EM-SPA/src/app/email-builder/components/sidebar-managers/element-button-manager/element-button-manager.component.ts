import { Component, OnInit, Input } from '@angular/core';
import { ButtonElement } from 'src/app/shared/models/email/elements/buttonElement';

@Component({
  selector: 'app-element-button-manager',
  templateUrl: './element-button-manager.component.html',
  styleUrls: ['./element-button-manager.component.scss']
})
export class ElementButtonManagerComponent implements OnInit {

  @Input() element: ButtonElement;

  constructor() { }

  ngOnInit() {
  }

}
