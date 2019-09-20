import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/shared/models/email/column';

@Component({
  selector: '[app-layout-column]',
  templateUrl: './layout-column.component.html',
  styleUrls: ['./layout-column.component.scss']
})
export class LayoutColumnComponent implements OnInit {

  @Input() column: Column;

  constructor() { }

  ngOnInit() {
  }

  flexAlignment(alingment: string) {
    switch (alingment) {
      case "right": return "flex-end"
      case "center": return "center"
      default: return "flex-start"
    }
  }
}
