import { NgModule } from '@angular/core';

import {CheckboxModule} from 'primeng/checkbox';
import { AppComponent } from './app.component';
import { PowerToxPipe } from './power-tox.pipe';
import { ProductsComponent } from './products/products.component';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PowerToxPipe,
    ProductsComponent,
    StringConvertPipe,
    ArraySplicePipe,


  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,


  ],
  providers: [],
  exports: [
    PowerToxPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
