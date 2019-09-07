import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-selector-input',
  templateUrl: './number-selector-input.component.html',
  styleUrls: ['./number-selector-input.component.scss']
})
export class NumberSelectorInputComponent implements OnInit {
  

  counterValue: number;

  @Input()
  get value():number{
    return this.counterValue;
  }

  @Output() valueChange = new EventEmitter<number>();

  set value(newValue:number){
    newValue = isNaN(newValue) ? 0 : newValue;
    this.counterValue = newValue;
    this.valueChange.emit(this.counterValue);
  }

  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  sub(){
    this.value--;
  }
  add(){
    this.value++;
  }

}
