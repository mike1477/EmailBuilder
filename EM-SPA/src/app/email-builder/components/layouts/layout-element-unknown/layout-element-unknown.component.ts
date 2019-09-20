import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-layout-element-unknown]',
  templateUrl: './layout-element-unknown.component.html',
  styleUrls: ['./layout-element-unknown.component.scss']
})
export class LayoutElementUnknownComponent implements OnInit {
  @Input() element: any;

  constructor() { }

  ngOnInit() {
    console.log(this.element);
  }

}
