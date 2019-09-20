import { Component, OnInit } from '@angular/core';
import { SelectionManagerService } from '../../../../shared/services/selection-manager.service';
import { Section } from 'src/app/shared/models/email/section';

@Component({
  selector: 'app-row-property-manager',
  templateUrl: './row-property-manager.component.html',
  styleUrls: ['./row-property-manager.component.scss']
})
export class RowPropertyManagerComponent implements OnInit {

  constructor(private selectionManager: SelectionManagerService) { }

  ngOnInit() { }

  get selectedRow(): Section {
    return this.selectionManager.selectedRow;
  }

  get backgroundColor(): string {
    var color = this.selectedRow && this.selectedRow.backgroundColor;
    return typeof color === "string" ? color : "transparent";
  }

  set backgroundColor(color: string) {
    color = typeof color === "string" ? color : "transparent";
    if (this.selectedRow) this.selectedRow.backgroundColor = color;
  }

  get contentBackgroundColor(): string {
    var color = this.selectedRow && this.selectedRow.contentBackgroundColor;
    return typeof color === "string" ? color : "transparent";
  }

  set contentBackgroundColor(color: string) {
    color = typeof color === "string" ? color : "transparent";
    if (this.selectedRow) this.selectedRow.contentBackgroundColor = color;
  }

  get columns() {
    return this.selectionManager.selectedRow && this.selectionManager.selectedRow.columns;
  }

}
