import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-align-control',
  templateUrl: './align-control.component.html',
  styleUrls: ['./align-control.component.scss']
})
export class AlignControlComponent implements OnInit {

  @Input() align:string;

  constructor() { }

  ngOnInit() {
  }

  set setAlign(newValue: string){
    if(this.align){
      this.align = newValue;
    }
    console.log(this.align);
  }

}
