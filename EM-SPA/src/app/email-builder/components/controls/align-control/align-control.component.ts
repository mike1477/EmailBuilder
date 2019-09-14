import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-align-control',
  templateUrl: './align-control.component.html',
  styleUrls: ['./align-control.component.scss']
})
export class AlignControlComponent implements OnInit {

  private managedValue: string;

  @Input()
  get alignment(): string {
    return this.managedValue;
  }

  @Output() alignmentChange = new EventEmitter<string>();

  set alignment(newValue: string) {
    this.managedValue = newValue;
    this.alignmentChange.emit(this.managedValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
