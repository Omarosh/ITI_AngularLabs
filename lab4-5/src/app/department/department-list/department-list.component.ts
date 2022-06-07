import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],

})
export class DepartmentListComponent implements OnInit {
 departments:Department[]=[];
  constructor(public depart: DepartmentService,private router: Router) {


  }

  ngOnInit(): void {
    this.departments=this.depart.showList();
  }
  showRedirect(iD:string)
  { let id=Number(iD);
   this.router.navigate(["departments",id]);
  }
  editRedirect(iD:string)
  { let id=Number(iD);
    this.router.navigate(["departments/edit",id]);
  }

  delete(id:string)
  {
    this.depart.delete(id);

  }

}
