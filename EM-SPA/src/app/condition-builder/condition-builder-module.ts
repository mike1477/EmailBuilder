import { NgModule } from '@angular/core';
import { ConditionBuilderMainComponent } from './components/condition-builder-main/condition-builder-main.component';
import { ConditionGroupComponent } from './components/condition-group/condition-group.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ConditionBuilderMainComponent,
    ConditionGroupComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ConditionBuilderModule { }
