import { NgModule } from '@angular/core';
import { PreviewerMainComponent } from './components/previewer-main/previewer-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';
import { FormAutoSubmitDirective } from './directives/form-auto-submit/form-auto-submit.directive';

@NgModule({
  declarations: [
    PreviewerMainComponent,
    FieldEditorComponent,
    FormAutoSubmitDirective
  ],
  imports: [
    CommonModule,
    RouterModule],
  providers: [],
  bootstrap: []
})
export class PreviewerModule { }
