import { Component, OnInit } from '@angular/core';
import { Email } from 'src/models/email';
import { SelectionManagerService } from '../services/selection-manager/selection-manager.service';

@Component({
  selector: '[app-display]',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(selectionService:SelectionManagerService) {
    this.emailTemplate = selectionService.emailBody;
   }

  emailTemplate:Email;

  ngOnInit() {
  }

  deleteRow(index:any){
    this.emailTemplate.rows.splice(index, 1);
  }

}
