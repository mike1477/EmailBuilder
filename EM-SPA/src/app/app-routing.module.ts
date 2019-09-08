import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewerMainComponent } from './previewer/components/previewer-main/previewer-main.component';
import { ConditionBuilderMainComponent } from './condition-builder/components/condition-builder-main/condition-builder-main.component';


const routes: Routes = [
  { path: 'preview', component: PreviewerMainComponent },
  { path: 'condition-builder', component: ConditionBuilderMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
