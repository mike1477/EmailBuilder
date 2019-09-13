import { Component, OnInit, Input } from '@angular/core';
import { Dimensions } from 'src/app/email-builder/models/dimensions';

@Component({
  selector: 'app-dimensions-setter-widget',
  templateUrl: './dimensions-setter-widget.component.html',
  styleUrls: ['./dimensions-setter-widget.component.scss']
})
export class DimensionsSetterWidgetComponent implements OnInit {

  @Input() dimensions: Dimensions;

  constructor() { }

  ngOnInit() {
  }

}
