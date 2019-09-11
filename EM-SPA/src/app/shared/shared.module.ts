import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmailBuilderModule } from "../email-builder/email-builder.module";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    DragDropModule,
    EmailBuilderModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [NgbActiveModal],
})
export class SharedModule { }
