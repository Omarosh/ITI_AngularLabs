import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {DepartmentListComponent} from "./department/department-list/department-list.component";
import {DepartmentAddComponent} from "./department/department-add/department-add.component";
import {DepartmentShowComponent} from "./department/department-show/department-show.component";
import {DepartmentEditComponent} from "./department/department-edit/department-edit.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DepartmentModule} from "./department/Department.module";

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'departments',loadChildren: () => import('./department/Department.module').then(m => m.DepartmentModule)},



  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
