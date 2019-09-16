import { Component, OnInit, Input } from '@angular/core';
import { Border } from 'src/app/email-builder/models/border';

@Component({
  selector: 'app-border-picker',
  templateUrl: './border-picker.component.html',
  styleUrls: ['./border-picker.component.scss']
})
export class BorderPickerComponent implements OnInit {

  @Input() borderSelected: Border;

  constructor() { }

  ngOnInit() {
  }

}
