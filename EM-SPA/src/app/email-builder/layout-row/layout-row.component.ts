import { Component, OnInit, Input } from '@angular/core';
import { Row } from 'src/models/row';

@Component({
  selector: 'app-layout-row',
  templateUrl: './layout-row.component.html',
  styleUrls: ['./layout-row.component.scss']
})
export class LayoutRowComponent implements OnInit {

  @Input() row:Row;
  constructor() { }

  ngOnInit() {
  }

}
