import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/email-builder/models/column';

@Component({
  selector: '[app-layout-column]',
  templateUrl: './layout-column.component.html',
  styleUrls: ['./layout-column.component.scss']
})
export class LayoutColumnComponent implements OnInit {
  
  @Input() column:Column;
  
  constructor() { }

  ngOnInit() {
  }

}
