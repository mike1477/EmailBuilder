import { Component, OnInit, EventEmitter, Output , SimpleChange, SimpleChanges, Input} from '@angular/core';
import { Padding } from 'src/app/email-builder/models/padding';

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.scss']
})
export class PaddingComponent implements OnInit {

 

  @Input() padding:Padding

  constructor() { }

  ngOnInit() {
  }

  get top(){
    return this.padding && this.padding.top;
  }
  set top(newValue: number){
    if(this.padding){
      this.padding.top = newValue;
    }
  }
  get right(){
    return this.padding && this.padding.right;
  }
  set right(newValue: number){
    if(this.padding){
      this.padding.right = newValue;
    }
  }
  get left(){
    return this.padding && this.padding.left;
  }
  set left(newValue: number){
    if(this.padding){
      this.padding.left = newValue;
    }
  }
  get bottom(){
    return this.padding && this.padding.bottom;
  }
  set bottom(newValue: number){
    if(this.padding){
      this.padding.bottom = newValue;
    }
  }
  
}
