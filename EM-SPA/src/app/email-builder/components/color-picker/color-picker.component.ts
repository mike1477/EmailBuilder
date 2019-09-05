import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  // Documentation on color picker -- https://www.npmjs.com/package/ngx-color-picker 
                                // -- https://zefoy.github.io/ngx-color-picker/


  color: any;
  toggle: boolean;
  inputBackground: string;

  constructor() { }

  ngOnInit() {
    this.color = '#000';
    this.inputBackground = '#fff';
    this.toggle = false;
  }


}
