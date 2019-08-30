import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { EmailBuilderRoutingModule } from './email-builder-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DisplayComponent } from './display/display.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutElementComponent } from './layout-element/layout-element.component';
import { LayoutCellComponent } from './layout-cell/layout-cell.component';


@NgModule({
  declarations: [DashboardComponent, DisplayComponent, LayoutRowComponent, LayoutElementComponent, LayoutCellComponent],
  imports: [
    CommonModule,
    EmailBuilderRoutingModule,
    DragDropModule,
    MatTabsModule
  ],
  entryComponents: [LayoutElementComponent],
  exports: [
    DashboardComponent,
    EmailBuilderRoutingModule
  ]
})
export class EmailBuilderModule { }
