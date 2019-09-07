import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../services/selection-manager/selection-manager.service';

@Component({
  selector: 'app-row-property-manager',
  templateUrl: './row-property-manager.component.html',
  styleUrls: ['./row-property-manager.component.scss']
})
export class RowPropertyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  get backgroundColor():string{
    var color = this.selectionManager && this.selectionManager.selectedRow && this.selectionManager.selectedRow.backgroundColor;
    return typeof color === "string" ? color :"transparent";
  }
  
  set backgroundColor (color:string){
    color = typeof color === "string" ? color : "transparent";
    var row = this.selectionManager && this.selectionManager.selectedRow;
    if(row) row.backgroundColor = color;
  }

  ngOnInit() {
  
  }

}
