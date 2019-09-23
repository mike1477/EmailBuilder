import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { ElementBase } from 'src/app/shared/models/email/elements/elementBase';


@Component({
  selector: 'app-element-property-manager',
  templateUrl: './element-property-manager.component.html',
  styleUrls: ['./element-property-manager.component.scss']
})
export class ElementPropertyManagerComponent implements OnInit {



  constructor(private selectionManager: SelectionManagerService) { }

  ngOnInit() { }

  get selectedElement(): ElementBase {
    return this.selectionManager.selectedElement;
  }
  get backgroundColor(): string {
    return this.selectedElement && this.selectedElement.backgroundColor;
  }

  set backgroundColor(newValue: string) {
    if (this.selectedElement) {
      this.selectedElement.backgroundColor = newValue;
    }
  }

  get alignment(): string {
    return this.selectedElement && this.selectedElement.align;
  }
  set alignment(newValue: string) {
    if (this.selectedElement) this.selectedElement.align = newValue;
  }
}
