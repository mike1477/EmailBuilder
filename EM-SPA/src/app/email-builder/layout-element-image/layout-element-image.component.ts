import { Component, OnInit, Input } from '@angular/core';
import { ImageElement } from 'src/models/element/imageElement';

@Component({
  selector: '[app-layout-element-image]',
  templateUrl: './layout-element-image.component.html',
  styleUrls: ['./layout-element-image.component.scss']
})
export class LayoutElementImageComponent implements OnInit {
  @Input() element:ImageElement;
  constructor() { }

  ngOnInit() {
  }

}
