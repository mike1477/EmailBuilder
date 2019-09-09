import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionBuilderMainComponent } from './components/condition-builder-main/condition-builder-main.component';
import { ConditionHandlerComponent } from './components/condition-handler/condition-handler.component';
import { ConditionSimpleComponent } from './components/condition-simple/condition-simple.component';
import { ConditionCompoundComponent } from './components/condition-compound/condition-compound.component';

@NgModule({
  declarations: [
    ConditionBuilderMainComponent,
    ConditionHandlerComponent,
    ConditionSimpleComponent,
    ConditionCompoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ConditionBuilderModule { }
