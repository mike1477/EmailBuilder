import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../../services/selection-manager/selection-manager.service';
import { Row } from 'src/app/email-builder/models/row';

@Component({
  selector: 'app-row-property-manager',
  templateUrl: './row-property-manager.component.html',
  styleUrls: ['./row-property-manager.component.scss']
})
export class RowPropertyManagerComponent implements OnInit {
  
  private _selectedRow:Row = null;

  constructor(private selectionManager: SelectionManagerService) { }
  
  ngOnInit() {
    this.selectionManager.selectedRow.subscribe(
      (newValue)=>{ this._selectedRow = newValue},
      (err)=> { /*TODO handle error */},
      ()=>{ /*TODO handle complete*/}
    );
  }


  get backgroundColor():string{
    var color = this._selectedRow && this._selectedRow.backgroundColor;
    return typeof color === "string" ? color :"transparent";
  }
  
  set backgroundColor (color:string){
    color = typeof color === "string" ? color : "transparent";
    if(this._selectedRow) this._selectedRow.backgroundColor = color;
  }
}
