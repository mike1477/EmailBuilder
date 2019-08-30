import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Email } from 'src/models/email';
import { Row } from 'src/models/row';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  emailTemplate:Email;

  ngOnInit() {
    this.emailTemplate = new Email();
    this.emailTemplate.rows = [];
  }

  drop(event: CdkDragDrop<string[]>){
    console.log("dropped")
    this.emailTemplate.rows.push(new Row());
  }

}
