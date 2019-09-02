import { Component, OnInit, Input } from '@angular/core';
import { ElementBase } from 'src/models/element/elementBase';
import { ButtonElement } from 'src/models/element/buttonElement';
import { DividerElement } from 'src/models/element/dividerElement';
import { ImageElement } from 'src/models/element/imageElement';
import { TextElement } from 'src/models/element/textElement';

@Component({
  selector: '[app-layout-element]',
  templateUrl: './layout-element.component.html',
  styleUrls: ['./layout-element.component.scss']
})
export class LayoutElementComponent implements OnInit {
  
  @Input() element:ElementBase;

  get elementType(){
    if(this.element instanceof ButtonElement) return "ElementTypeButton";
    if(this.element instanceof DividerElement) return "ElementTypeDivider";
    if(this.element instanceof ImageElement) return "ElementTypeImage";
    if(this.element instanceof TextElement) return "ElementTypeText";
    return "Unknown";
  }
  constructor() { }

  ngOnInit() {
  }

}
