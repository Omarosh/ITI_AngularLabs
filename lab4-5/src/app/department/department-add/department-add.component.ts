import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  department:Department=new Department(0,'','');
  constructor(public dept:DepartmentService,private router:Router) { }

  ngOnInit(): void {


  }
  add(id:string,name:string,loc:string )
  {
    this.department.id=Number(id);
    this.department.deptName=name;
    this.department.location=loc;
   this.dept.add(this.department);
   console.log(this.dept.showList());
  this.router.navigate(["departments"]);

  }


}
