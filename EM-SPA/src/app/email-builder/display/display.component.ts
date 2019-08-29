import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>){
    console.log("dropped");
    this.layoutRows.push(0);
  }

  layoutRows = [0,0];

}
