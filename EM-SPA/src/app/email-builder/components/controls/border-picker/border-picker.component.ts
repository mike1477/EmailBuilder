import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-picker',
  templateUrl: './border-picker.component.html',
  styleUrls: ['./border-picker.component.scss']
})
export class BorderPickerComponent implements OnInit {
  borderSelected: string;

  constructor() { }

  ngOnInit() {
    this.borderSelected = 'solid';
  }
  setBorder(border: string){
    this.borderSelected = border;
  }

}
