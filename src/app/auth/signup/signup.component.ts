import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import {Employees} from './../../dashboard/index/employee.model';
import {EmployeeService} from './../../dashboard/index/employee.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private location:Location,private employeeService:EmployeeService) { }

  myForm:FormGroup;
  employee:Employees;
  signupMsg:string="";
  signupStatus:boolean=false;

    loginPage(){
      this.location.back();
    }

   onSubmit(){
     let employees=new Employees(this.myForm.value.email,
<<<<<<< HEAD
<<<<<<< HEAD
        this.myForm.value.password,
       this.myForm.value.username,
       this.myForm.value.employeeType);
   
=======
=======
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
                                this.myForm.value.password,
                                this.myForm.value.username,
                                this.myForm.value.firstName,
                                this.myForm.value.lastName,
                                this.myForm.value.employeeType);
    // let employee=new Employees(this.myForm.value.email,
    //   this.myForm.value.password);
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d

      this.employeeService.addEmployee(employees)
      .subscribe(
        data=>{
          this.signupMsg="Employee Registrataion sucessfull";
          this.signupStatus=true;
        }
      )

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
        Validators.minLength(5)
      ]
        
      ),
      username:new FormControl(null,[
        Validators.required
      ]),
      employeeType:new FormControl(null,Validators.required)
    })
  //   this.myForm=new FormGroup({
  //     email:new FormControl(null,Validators.required),
  //     password:new FormControl(null,Validators.required),
  //     username:new FormControl(null,Validators.required),
  //     employeeType:new FormControl(null,Validators.required),
  //     image:new FormControl(null,Validators.required)
  //   })
  }

}
