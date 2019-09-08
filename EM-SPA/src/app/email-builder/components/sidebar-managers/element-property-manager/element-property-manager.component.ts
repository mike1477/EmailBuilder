import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../../services/selection-manager/selection-manager.service';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';

@Component({
  selector: 'app-element-property-manager',
  templateUrl: './element-property-manager.component.html',
  styleUrls: ['./element-property-manager.component.scss']
})
export class ElementPropertyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  private _selectedElement:ElementBase = null;

  ngOnInit() {
    this.selectionManager.selectedElement.subscribe(
      (newValue) => { this._selectedElement = newValue},
      (err)=> { /*TODO handle error */},
      ()=>{ /*TODO handle complete*/}
    );
  }

  get backgroundColor():string {
    return this._selectedElement && this._selectedElement.backgroundColor;
  }

  set backgroundColor(newValue: string){
    newValue = typeof newValue === "string" ? newValue: "transparent";
    if(this._selectedElement){
      this._selectedElement.backgroundColor = newValue;
    }
  }

}
