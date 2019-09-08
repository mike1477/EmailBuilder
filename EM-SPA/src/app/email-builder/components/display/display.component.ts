import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { SelectionManagerService } from '../../services/selection-manager/selection-manager.service';

@Component({
  selector: '[app-display]',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private selectionManager:SelectionManagerService) {}

  emailTemplate:Email;

  ngOnInit() {
    this.selectionManager.emailTemplate.subscribe(
      (newValue)=>{ this.emailTemplate = newValue},
      (err)=> { /*TODO handle error */},
      ()=>{ /*TODO handle complete*/}
    );
    this.selectionManager.loadEmailTemplate();
  }

  deleteRow(index:any){
    this.emailTemplate.rows.splice(index, 1);
  }

}
