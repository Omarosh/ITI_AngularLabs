import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { TopheaderComponent } from './topheader/topheader.component';


@NgModule({
  declarations: [
    LogoComponent,
    TopheaderComponent,
    MenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LogoComponent,
    TopheaderComponent,
    MenuComponent,
  ]
})
export class CoreModule { }
