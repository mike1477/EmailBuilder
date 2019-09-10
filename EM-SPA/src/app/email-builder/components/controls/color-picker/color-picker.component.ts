import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';

const defaultStringColor = "transparent";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  // Documentation on color picker -- https://www.npmjs.com/package/ngx-color-picker 
                                // -- https://zefoy.github.io/ngx-color-picker/


  toggle: boolean = false;
  inputBackground: string;

  private managedColor:string = defaultStringColor;

  @Input()
  get color():string{
    return this.managedColor;
  }

  @Output() colorChange = new EventEmitter<string>();

  set color(newValue: string){
    newValue = typeof newValue === "string" ? newValue : defaultStringColor;
    this.managedColor = newValue;
    this.colorChange.emit(this.managedColor);
  }

  constructor() { }

  ngOnInit() {

  }


}
