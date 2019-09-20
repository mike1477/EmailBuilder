import { Component, OnInit, Input } from '@angular/core';
import { ImageElement } from 'src/app/shared/models/email/elements/imageElement';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {
  @Input() imageElement: ImageElement;

  // url: "",
  // altText: "",
  // link: ""

  constructor() { }

  ngOnInit() {
  }


}
