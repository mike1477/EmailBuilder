import { Component, OnInit, Input } from '@angular/core';
import { ElementBase } from 'src/models/element/elementBase';

@Component({
  selector: '[app-layout-element]',
  templateUrl: './layout-element.component.html',
  styleUrls: ['./layout-element.component.scss']
})
export class LayoutElementComponent implements OnInit {
  
  @Input() element:ElementBase;

  constructor() { }

  ngOnInit() {
  }

}
