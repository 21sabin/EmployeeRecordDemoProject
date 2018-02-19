import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from 'app/dashboard/index/employee.service';
import { Employees } from './../index/employee.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router: Router) { }
  
  employee:Employees;
  myForm:FormGroup;
  name:string = "sabin";
  // name:string=;

  // ngOnChanges() {
  //   debugger;
  //   console.log("Employee edit component");
  //   this.employeeService.isEditEmployee.subscribe(
  //     (emp:any)=>{
  //       this.employee = emp;

  //       console.log("data in edit component",this.employee);
  //     }
  //   )

  //   // this.myForm = new FormGroup({
      
  //   //   email:new FormControl(null,[
  //   //     Validators.required,
  //   //     Validators.email
  //   //   ]),
  //   //   password:new FormControl(null,[
  //   //     Validators.required,
  //   //     Validators.minLength(5)
  //   //   ]),
  //   //   username:new FormControl(null,[
  //   //     Validators.required
  //   //   ]),
  //   //   employeeType:new FormControl(null,Validators.required)
  //   // })

  // }

  ngOnInit() {
    debugger;
    console.log("Employee edit component");
    this.employeeService.isEditEmployee.subscribe(
      (emp:any)=>{
        this.employee = emp;

        console.log("data in edit component",this.employee);
      }
    )

    // this.myForm = new FormGroup({
      
    //   email:new FormControl(null,[
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   password:new FormControl(null,[
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   username:new FormControl(null,[
    //     Validators.required
    //   ]),
    //   employeeType:new FormControl(null,Validators.required)
    // })
  }





  loginPage() {
    this.router.navigateByUrl('/login');
    console.log(this.employee);
    
  }

}
