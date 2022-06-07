import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.css']
})
export class DepartmentShowComponent implements OnInit {
  id:string|null="";
  department:Department=new Department(0,'','');
  constructor( private route: ActivatedRoute,public depart:DepartmentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
       this.id = params.get('id');
       this.department=this.depart.showOne(this.id);

    });
  }

}
