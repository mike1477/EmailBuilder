import { Component, OnInit, Input } from '@angular/core';
import { ButtonElement } from 'src/app/shared/models/email/elements/buttonElement';

@Component({
  selector: '[app-layout-element-button]',
  templateUrl: './layout-element-button.component.html',
  styleUrls: ['./layout-element-button.component.scss']
})
export class LayoutElementButtonComponent implements OnInit {
  @Input() element: ButtonElement;

  constructor() { }

  ngOnInit() {
  }

}
