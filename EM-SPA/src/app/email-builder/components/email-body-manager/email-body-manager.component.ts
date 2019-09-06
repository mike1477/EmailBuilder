import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../services/selection-manager/selection-manager.service';

@Component({
  selector: 'app-email-body-manager',
  templateUrl: './email-body-manager.component.html',
  styleUrls: ['./email-body-manager.component.scss']
})
export class EmailBodyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  ngOnInit() {
  }

  get backgroundColor():string {
    return this.selectionManager.emailBody && this.selectionManager.emailBody.backgroundColor;
  }

  set backgroundColor(newValue: string){
    newValue = typeof newValue === "string" ? newValue: "transparent";
    var emailBody = this.selectionManager.emailBody;
    if(emailBody){
      emailBody.backgroundColor = newValue;
    }
  }

}
