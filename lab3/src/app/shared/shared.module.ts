import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
  ],
  exports:[
    StarComponent,
  ]
})
export class SharedModule { }
