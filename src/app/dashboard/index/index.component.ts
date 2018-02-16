import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/dashboard/index/employee.service';
import {Employee} from './employee.model';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:Employee[];

  ngOnInit() {
     this.employeeService.getEmlopyeeList()
     .subscribe(
      (employee:Employee[])=>{
          this.employees=employee
      }
     )

  }

}
