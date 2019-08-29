import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailBuilderRoutingModule } from './email-builder-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TextCardComponent } from './text-card/text-card.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [DashboardComponent, TextCardComponent, DisplayComponent],
  imports: [
    CommonModule,
    EmailBuilderRoutingModule,
    DragDropModule
  ],
  entryComponents: [TextCardComponent],
  exports: [
    DashboardComponent,
    EmailBuilderRoutingModule
  ]
})
export class EmailBuilderModule { }
