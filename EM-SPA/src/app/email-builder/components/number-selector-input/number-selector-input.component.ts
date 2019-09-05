import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-selector-input',
  templateUrl: './number-selector-input.component.html',
  styleUrls: ['./number-selector-input.component.scss']
})
export class NumberSelectorInputComponent implements OnInit {
  value: number;

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
