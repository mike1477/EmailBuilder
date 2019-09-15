import { NgModule } from '@angular/core';
import { PreviewerMainComponent } from './components/previewer-main/previewer-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';

@NgModule({
  declarations: [
    PreviewerMainComponent,
    FieldEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule],
  providers: [],
  bootstrap: []
})
export class PreviewerModule { }
