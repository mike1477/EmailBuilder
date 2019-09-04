import { Component, OnInit } from '@angular/core';
import { Email } from 'src/models/email';
import { Row } from 'src/models/row';

@Component({
  selector: '[app-display]',
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

  deleteRow(index:any){
    this.emailTemplate.rows.splice(index, 1);
  }

}
