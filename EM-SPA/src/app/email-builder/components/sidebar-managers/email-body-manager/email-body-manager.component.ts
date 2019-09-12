import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';

@Component({
  selector: 'app-email-body-manager',
  templateUrl: './email-body-manager.component.html',
  styleUrls: ['./email-body-manager.component.scss']
})
export class EmailBodyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  ngOnInit() { }

  get emailBody(): Email{
    return this.selectionManager.emailTemplate;
  }

  get backgroundColor():string {
    return this.emailBody && this.emailBody.backgroundColor;
  }

  set backgroundColor(newValue: string){
    newValue = typeof newValue === "string" ? newValue: "transparent";
    if (this.emailBody){
      this.emailBody.backgroundColor = newValue;
    }
  }

}
