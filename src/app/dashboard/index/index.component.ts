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
  clonedEmployees: Employees[] = [];
  searchedEmployees: Array<any> = [];

  searchClick = false;

  ngOnInit() {
     this.employeeService.getEmployeeList()
     .subscribe(
      (employee:Employees[])=>{
          this.employees = employee;
          console.log("asdsad", this.employees);
          
      }
     )
  }

  searchEmployee(searchName) {

    this.searchedEmployees = [];
    this.searchClick = true;
    console.log("cloned employees", this.clonedEmployees);
    console.log("employees", this.employees);
    for(var i = 0; i < this.employees.length; i++) {
      
      if(this.employees[i].firstName.toLowerCase().startsWith(searchName.toLowerCase())) {
        this.searchedEmployees.push(this.employees[i]);
        console.log(this.searchedEmployees[i]);
        
      }
      console.log(searchName);
    }
    this.employees = this.searchedEmployees;
  }

}
