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
import { LayoutElementDividerComponent } from './layout-element-divider/layout-element-divider.component';
import { LayoutElementTextComponent } from './layout-element-text/layout-element-text.component';
import { LayoutElementImageComponent } from './layout-element-image/layout-element-image.component';
import { LayoutElementUnknownComponent } from './layout-element-unknown/layout-element-unknown.component';
import { LayoutElementButtonComponent } from './layout-element-button/layout-element-button.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    DashboardComponent, 
    DisplayComponent, 
    LayoutRowComponent, 
    LayoutElementComponent, 
    LayoutColumnComponent, 
    LayoutElementButtonComponent,
    LayoutElementDividerComponent, 
    LayoutElementTextComponent, 
    LayoutElementImageComponent, 
    LayoutElementUnknownComponent
  ],
  imports: [
    CommonModule,
    EmailBuilderRoutingModule,
    DragDropModule,
    MatTabsModule,
    DragulaModule,
    EditorModule
  ],
  entryComponents: [LayoutElementComponent],
  exports: [
    DashboardComponent,
    EmailBuilderRoutingModule
  ]
})
export class EmailBuilderModule { }
