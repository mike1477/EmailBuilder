import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBuilderModule } from "./email-builder/email-builder.module";
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { ConditionBuilderModule } from './condition-builder/condition-builder-module';
import { PreviewerModule } from './previewer/previewer.module';
import { SelectionManagerService } from './shared/services/selection-manager.service';
import { StorageServiceModule } from "ngx-webstorage-service";
import { AppApiServiceService } from './shared/services/app-api-service.service';
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
    NgbModule,
    DragulaModule.forRoot(),
    StorageServiceModule
  ],
  providers: [
    DragulaService,
    SelectionManagerService,
    AppApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
