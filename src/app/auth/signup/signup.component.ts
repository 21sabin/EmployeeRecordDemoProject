import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import {Employee} from './../../dashboard/index/employee.model';
import {EmployeeService} from './../../dashboard/index/employee.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private location:Location,private employeeService:EmployeeService) { }

  myForm:FormGroup;
  employee:Employee;

    loginPage(){
      this.location.back();
    }

   onSubmit(){
    //  let employee=new Employee(this.myForm.value.email,
    //     this.myForm.value.password,
    //    this.myForm.value.username,
    //    this.myForm.value.employeeType,
    //    this.myForm.value.image);

      // this.employeeService.addEmployee(employee)
      // .subscribe(
      //   data=>console.log(data)
      // )
   }

  ngOnInit() {
    this.myForm=new FormGroup({
      
      email:new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(" ^[a-zA-Z]+$")
      ]
        
      ),
      username:new FormControl(null,[
        Validators.required,
        Validators.pattern("^[a-zA-Z]$")
      ]),
      employeeType:new FormControl(null,Validators.required),
      image:new FormControl(null,Validators.required)
    })
  }

}
