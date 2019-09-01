import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { EmailBuilderRoutingModule } from './email-builder-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DisplayComponent } from './display/display.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutElementComponent } from './layout-element/layout-element.component';
import { LayoutColumnComponent } from './layout-column/layout-column.component';
import { DragulaModule,  DragulaService} from 'ng2-dragula';


@NgModule({
  declarations: [DashboardComponent, DisplayComponent, LayoutRowComponent, LayoutElementComponent, LayoutColumnComponent],
  imports: [
    CommonModule,
    EmailBuilderRoutingModule,
    DragDropModule,
    MatTabsModule,
    DragulaModule
  ],
  entryComponents: [LayoutElementComponent],
  exports: [
    DashboardComponent,
    EmailBuilderRoutingModule
  ]
})
export class EmailBuilderModule { }
