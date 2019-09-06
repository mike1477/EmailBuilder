import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../services/selection-manager/selection-manager.service';

@Component({
  selector: 'app-element-property-manager',
  templateUrl: './element-property-manager.component.html',
  styleUrls: ['./element-property-manager.component.scss']
})
export class ElementPropertyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  ngOnInit() {
  }

  get backgroundColor():string {
    return this.selectionManager.selectedElement && this.selectionManager.selectedElement.backgroundColor;
  }

  set backgroundColor(newValue: string){
    newValue = typeof newValue === "string" ? newValue: "transparent";
    var selectedElement = this.selectionManager.selectedElement;
    if(selectedElement){
      selectedElement.backgroundColor = newValue;
    }
  }

}
