import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/shared/models/email/section';

@Component({
  selector: '[app-layout-row]',
  templateUrl: './layout-row.component.html',
  styleUrls: ['./layout-row.component.scss']
})
export class LayoutRowComponent implements OnInit {

  @Input() row: Section;
  constructor() { }

  ngOnInit() {
  }

}
