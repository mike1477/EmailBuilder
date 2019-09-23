import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';

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

  private managedColor: string;

  constructor() { }

  ngOnInit() { }



  @Input()
  get color(): string {
    return this.managedColor;
  }

  set color(newValue: string) {
    this.managedColor = newValue;
  }

  @Output() colorChange = new EventEmitter<string>();

  set colorPickerValue(newValue: string) {
    this.managedColor = newValue;
    this.colorChange.emit(this.managedColor);
  }
  get colorPickerValue(): string {
    return this.managedColor;
  }

  get showPropertyMangerButton() {
    return this.conditionEditRequest.observers.length > 0;
  }

  @Output() conditionEditRequest = new EventEmitter();
  editConditions() {
    this.conditionEditRequest.emit();
  }
}
