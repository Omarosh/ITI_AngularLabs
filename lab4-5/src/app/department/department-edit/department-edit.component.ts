import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "../../department.service";

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  id:string|null="";
  department:Department=new Department(0,'','');
  constructor( private route: ActivatedRoute,public depart:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.department=this.depart.showOne(this.id);

    });
  }
update(name:string,loc:string)
{
  this.department.id=Number(this.id);
  this.department.deptName=name;
  this.department.location=loc;
  this.depart.update(Number(this.id),this.department);
  this.router.navigate(["departments"]);

}


}
