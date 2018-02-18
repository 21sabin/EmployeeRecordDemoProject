import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/dashboard/index/employee.service';
import {Employees} from './../index/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employee:Employees;

  ngOnInit() {
    console.log("on edit component")
    this.employeeService.isEditEmployee.subscribe(
      (employee:Employees)=>console.log("edit message",employee)
    )
  }

}
