import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DepartmentService} from "./department.service";
import {DepartmentModule} from "./department/Department.module";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CoreModule} from "./core/core.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartmentModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
