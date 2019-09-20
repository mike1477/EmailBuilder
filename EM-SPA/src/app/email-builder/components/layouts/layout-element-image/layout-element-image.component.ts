import { Component, OnInit, Input } from '@angular/core';
import { ImageElement } from 'src/app/shared/models/email/elements/imageElement';

@Component({
  selector: '[app-layout-element-image]',
  templateUrl: './layout-element-image.component.html',
  styleUrls: ['./layout-element-image.component.scss']
})
export class LayoutElementImageComponent implements OnInit {
  @Input() element: ImageElement;
  constructor() { }

  ngOnInit() {
  }

}
