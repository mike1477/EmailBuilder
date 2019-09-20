import { Component, OnInit, Input } from '@angular/core';
import { TextElement } from 'src/app/shared/models/email/elements/textElement';

@Component({
  selector: 'app-element-text-manager',
  templateUrl: './element-text-manager.component.html',
  styleUrls: ['./element-text-manager.component.scss']
})
export class ElementTextManagerComponent implements OnInit {
  @Input() element: TextElement;

  constructor() { }

  ngOnInit() {
  }

}
