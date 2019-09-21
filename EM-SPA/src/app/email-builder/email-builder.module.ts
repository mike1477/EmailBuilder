import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DisplayComponent } from './components/display/display.component';
import { LayoutRowComponent } from './components/layouts/layout-row/layout-row.component';
import { LayoutColumnComponent } from './components/layouts/layout-column/layout-column.component';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { LayoutElementDividerComponent } from './components/layouts/layout-element-divider/layout-element-divider.component';
import { LayoutElementTextComponent } from './components/layouts/layout-element-text/layout-element-text.component';
import { LayoutElementImageComponent } from './components/layouts/layout-element-image/layout-element-image.component';
import { LayoutElementUnknownComponent } from './components/layouts/layout-element-unknown/layout-element-unknown.component';
import { LayoutElementButtonComponent } from './components/layouts/layout-element-button/layout-element-button.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SelectorDirective } from './directives/selector/selector.directive';
import { ColorPickerComponent } from './components/controls/color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NumberSelectorInputComponent } from './components/controls/number-selector-input/number-selector-input.component';
import { BorderPickerComponent } from './components/controls/border-picker/border-picker.component';
import { ImageInputComponent } from './components/widgets/image-input/image-input.component';
import { FormsModule } from '@angular/forms';
import { RowPropertyManagerComponent } from './components/sidebar-managers/row-property-manager/row-property-manager.component';
import { EmailBodyManagerComponent } from './components/sidebar-managers/email-body-manager/email-body-manager.component';
import { ElementPropertyManagerComponent } from './components/sidebar-managers/element-property-manager/element-property-manager.component';
import { CommonNumberSelectorComponent } from './components/widgets/common-number-selector/common-number-selector.component';
import { AlignControlComponent } from './components/controls/align-control/align-control.component';
import { RouterModule } from '@angular/router';
import { ColorPropertyManagerComponent } from './components/controls/color-property-manager/color-property-manager.component';
import { ElementButtonManagerComponent } from './components/sidebar-managers/element-button-manager/element-button-manager.component';
import { ElementDividerManagerComponent } from './components/sidebar-managers/element-divider-manager/element-divider-manager.component';
import { ElementImageManagerComponent } from './components/sidebar-managers/element-image-manager/element-image-manager.component';
import { ElementTextManagerComponent } from './components/sidebar-managers/element-text-manager/element-text-manager.component';
import { PixelTrackerDirective } from './directives/pixel-tracker/pixel-tracker.directive';


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
    SelectorDirective,
    ColorPickerComponent,
    NumberSelectorInputComponent,
    BorderPickerComponent,
    ImageInputComponent,
    RowPropertyManagerComponent,
    EmailBodyManagerComponent,
    ElementPropertyManagerComponent,
    CommonNumberSelectorComponent,
    AlignControlComponent,
    ColorPropertyManagerComponent,
    ElementButtonManagerComponent,
    ElementDividerManagerComponent,
    ElementImageManagerComponent,
    ElementTextManagerComponent,
    PixelTrackerDirective
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatTabsModule,
    DragulaModule,
    EditorModule,
    ColorPickerModule,
    FormsModule,
    RouterModule
  ],
  entryComponents: [],
  exports: [
    DashboardComponent
  ]
})
export class EmailBuilderModule { }
