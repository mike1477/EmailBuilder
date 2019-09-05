import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { EmailBuilderRoutingModule } from './email-builder-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DisplayComponent } from './display/display.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutColumnComponent } from './layout-column/layout-column.component';
import { DragulaModule,  DragulaService} from 'ng2-dragula';
import { LayoutElementDividerComponent } from './layout-element-divider/layout-element-divider.component';
import { LayoutElementTextComponent } from './layout-element-text/layout-element-text.component';
import { LayoutElementImageComponent } from './layout-element-image/layout-element-image.component';
import { LayoutElementUnknownComponent } from './layout-element-unknown/layout-element-unknown.component';
import { LayoutElementButtonComponent } from './layout-element-button/layout-element-button.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SelectorDirective } from './directives/selector/selector.directive';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NumberSelectorInputComponent } from './components/number-selector-input/number-selector-input.component';
import { BorderPickerComponent } from './components/border-picker/border-picker.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { FormsModule } from '@angular/forms';
import { RowPropertyManagerComponent } from './components/row-property-manager/row-property-manager.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    DisplayComponent, 
    LayoutRowComponent, 
    LayoutColumnComponent, 
    LayoutElementButtonComponent,
    LayoutElementDividerComponent, 
    LayoutElementTextComponent, 
    LayoutElementImageComponent, 
    LayoutElementUnknownComponent, 
    SelectorDirective, ColorPickerComponent, NumberSelectorInputComponent, BorderPickerComponent, ImageInputComponent, RowPropertyManagerComponent
  ],
  imports: [
    CommonModule,
    EmailBuilderRoutingModule,
    DragDropModule,
    MatTabsModule,
    DragulaModule,
    EditorModule,
    ColorPickerModule,
    FormsModule
  ],
  entryComponents: [],
  exports: [
    DashboardComponent,
    EmailBuilderRoutingModule
  ]
})
export class EmailBuilderModule { }
