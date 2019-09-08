import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../../services/selection-manager/selection-manager.service';
import { Email } from 'src/app/email-builder/models/email';

@Component({
  selector: 'app-email-body-manager',
  templateUrl: './email-body-manager.component.html',
  styleUrls: ['./email-body-manager.component.scss']
})
export class EmailBodyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  private _emailBody:Email = null;

  ngOnInit() {
    this.selectionManager.emailTemplate.subscribe(
      (newValue)=>{ this._emailBody = newValue},
      (err)=> { /*TODO handle error */},
      ()=>{ /*TODO handle complete*/}
    );
  }

  get backgroundColor():string {
    return this._emailBody && this._emailBody.backgroundColor;
  }

  set backgroundColor(newValue: string){
    newValue = typeof newValue === "string" ? newValue: "transparent";
    if(this._emailBody){
      this._emailBody.backgroundColor = newValue;
    }
  }

}
