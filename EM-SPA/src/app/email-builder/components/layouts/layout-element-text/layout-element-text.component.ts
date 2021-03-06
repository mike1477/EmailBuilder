import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextElement } from 'src/app/shared/models/email/elements/textElement';

@Component({
  selector: '[app-layout-element-text]',
  templateUrl: './layout-element-text.component.html',
  styleUrls: ['./layout-element-text.component.scss']
})
export class LayoutElementTextComponent implements OnInit {

  @Input() element: TextElement;

  //content = new FormControl(this.element.content);

  constructor() { }

  ngOnInit() {
  }
  onResize(ev) {
    this.element.widthInPixels = ev.contentRect.width
  }
}
