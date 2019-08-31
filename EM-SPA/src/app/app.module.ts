import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBuilderModule } from "./email-builder/email-builder.module";
import { DragulaModule,  DragulaService} from 'ng2-dragula';

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
    DragulaModule.forRoot()
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
