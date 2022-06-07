import { Injectable } from '@angular/core';
import {Department} from "./models/department";

// @Injectable({
//   providedIn: 'root'
// })
export class DepartmentService {
  departments:Department[]=[];
  department:Department=new Department(0,'','');
  constructor() {
    this.departments.push(new Department(1,"Ali","Cairo"));
    this.departments.push(new Department(2,"Omar","Alex"));
    this.departments.push(new Department(3,"Amr","Suez"));
    this.departments.push(new Department(4,"Ali","Cairo"));
    this.departments.push(new Department(5,"Omar","Alex"));
    this.departments.push(new Department(6,"Amr","Suez"));
    this.departments.push(new Department(7,"Ali","Cairo"));
    this.departments.push(new Department(8,"Omar","Alex"));
    this.departments.push(new Department(9,"Amr","Suez"));

  }

 public showList():Department[]
  {
    return this.departments;
  }
  public add(depart:Department)
  {
    this.departments.push(depart);
  }
  public showOne(id:string|null)
  {
    this.departments.forEach((department)=>{

      if(department.id===Number(id))
      {
       this.department=department;
      }




    });
    return this.department;
  }

  update(id:number,depart:Department)

  {this.departments.forEach((department)=>{

    if(department.id===Number(id))
    {

      department.deptName=depart.deptName
      department.location=depart.location;



    }


  });}

  delete(id:string)
  {
    this.departments.forEach((department,index)=>{

      if(department.id===Number(id))
      {
        this.departments.splice(index,1);
      }


    });

  }

}
