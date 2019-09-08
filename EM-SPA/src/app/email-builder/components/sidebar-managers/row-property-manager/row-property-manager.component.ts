import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../../services/selection-manager/selection-manager.service';
import { Padding } from 'src/app/email-builder/models/padding';
import { Row } from 'src/app/email-builder/models/row';

@Component({
  selector: 'app-row-property-manager',
  templateUrl: './row-property-manager.component.html',
  styleUrls: ['./row-property-manager.component.scss']
})
export class RowPropertyManagerComponent implements OnInit {
  
  constructor(private selectionManager: SelectionManagerService) { }
  
  ngOnInit() {}

  get selectedRow(): Row {
    return this.selectionManager.selectedRow;
  }

  get backgroundColor():string{
    var color = this.selectedRow && this.selectedRow.backgroundColor;
    return typeof color === "string" ? color :"transparent";
  }
  
  set backgroundColor (color:string){
    color = typeof color === "string" ? color : "transparent";
    if (this.selectedRow) this.selectedRow.backgroundColor = color;
  }

  get columns(){
    return this.selectionManager.selectedRow && this.selectionManager.selectedRow.columns;
  }

  }
