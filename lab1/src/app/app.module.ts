import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {StudentComponent} from "./student/student.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './department/department.component';
import { LogoComponent } from './logo/logo.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ContenttextComponent } from './contenttext/contenttext.component';
import { ConleftpanelComponent } from './conleftpanel/conleftpanel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    StudentComponent,
    DepartmentComponent,
    LogoComponent,
    TopheaderComponent,
    MenuComponent,
    SubmenuComponent,
    ContenttextComponent,
    ConleftpanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
