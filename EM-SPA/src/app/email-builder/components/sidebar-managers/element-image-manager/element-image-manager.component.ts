import { Component, OnInit, Input } from '@angular/core';
import { ImageElement } from 'src/app/shared/models/email/elements/imageElement';

@Component({
  selector: 'app-element-image-manager',
  templateUrl: './element-image-manager.component.html',
  styleUrls: ['./element-image-manager.component.scss']
})
export class ElementImageManagerComponent implements OnInit {

  @Input() element: ImageElement;

  constructor() { }

  ngOnInit() {
  }

}
