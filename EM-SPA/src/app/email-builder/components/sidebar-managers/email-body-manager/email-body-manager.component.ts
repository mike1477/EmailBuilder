import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email-builder/models/email';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';

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

  get backgroundColor():PropertyManagerColor {
    return this.emailBody && this.emailBody.backgroundColor;
  }

}
