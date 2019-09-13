import { Component, OnInit, Input, Output } from '@angular/core';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';

@Component({
  selector: 'app-align-control',
  templateUrl: './align-control.component.html',
  styleUrls: ['./align-control.component.scss']
})
export class AlignControlComponent implements OnInit {

  @Input() selectedElement: ElementBase;

  constructor() { }

  ngOnInit() {
  }

  set align(newValue: string){
    this.selectedElement.align = newValue;
  }

}
