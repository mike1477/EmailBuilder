import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBuilderModule } from "./email-builder/email-builder.module";
import { DragulaModule,  DragulaService} from 'ng2-dragula';
import { ConditionBuilderModule } from './condition-builder/condition-builder-module';
import { PreviewerModule } from './previewer/previewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    SharedModule,
    EmailBuilderModule,
    ConditionBuilderModule,
    PreviewerModule,
    DragulaModule.forRoot()
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
