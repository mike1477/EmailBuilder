import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionBuilderMainComponent } from './components/condition-builder-main/condition-builder-main.component';
import { ConditionHandlerComponent } from './components/condition-handler/condition-handler.component';
import { ConditionSimpleComponent } from './components/condition-simple/condition-simple.component';
import { ConditionCompoundComponent } from './components/condition-compound/condition-compound.component';
import { MergeFieldManagerComponent } from '../shared/components/modals/merge-field-manager/merge-field-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConditionBuilderMainComponent,
    ConditionHandlerComponent,
    ConditionSimpleComponent,
    ConditionCompoundComponent,
    MergeFieldManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class ConditionBuilderModule { }
