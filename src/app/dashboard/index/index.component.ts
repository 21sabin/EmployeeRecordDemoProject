import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/dashboard/index/employee.service';
import {Employees} from './employee.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:Employees[];
  deleteMsg:string="";
  deleteStatus:boolean=false;
  filterEmployees:Employees[]=[];
  username:string="";
 
  employeeSize(){
    return this.employees.length;
  }

  displayDeleteMsg(){
    setTimeout(()=>{
      document.getElementById('deleteMsg').innerHTML="<h2 style='color:red;'>Employee Recorded Sucessfully</h2>";
    },3000)
  }

  editEmployee(e:Employees){
    // console.log("edit",e)
    this.employeeService.editEmployee(e);
  }

  search(event:any){
    this.filterEmployees=[]
    console.log("event",event.target.value)
      for(const emp of this.employees){
          if(emp.username.toLowerCase().indexOf(event.target.value.toLowerCase())!=-1){
            this.filterEmployees.push(emp);
            // console.log("filter employee",this.filterEmployees)
          }
      }
  }

  deleteEmployee(e:any){
    this.employeeService.deleteEmployee(e)
    .subscribe(
      data=>{
        this.deleteMsg="Employee Recorded sucessfully";
        this.deleteStatus=true;
      }     
    )
  }

  ngOnInit() {
  
     this.employeeService.getEmlopyeeList()
     .subscribe(
      (employee:Employees[])=>{
          this.employees=employee
     
      }
     )

  //   this.employeeService.getEmlopyeeList()
  //   .subscribe(
  //     data=>console.log("data",data)
  //   )
   }
}