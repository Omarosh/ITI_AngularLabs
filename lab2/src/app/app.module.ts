import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {StudentComponent} from "./student/student.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './department/department.component';

import { SubmenuComponent } from './submenu/submenu.component';
import { ContenttextComponent } from './contenttext/contenttext.component';
import { ConleftpanelComponent } from './conleftpanel/conleftpanel.component';
import {FormsModule} from "@angular/forms";

import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    StudentComponent,
    DepartmentComponent,
    SubmenuComponent,
    ContenttextComponent,
    ConleftpanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
