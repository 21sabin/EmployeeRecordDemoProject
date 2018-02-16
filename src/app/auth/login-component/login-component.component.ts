import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router'



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private router:Router) { }
  private email:String="shresthasabin@gmail.com";
  private password:String="secretkey";
  loginError:boolean;
  loginErrorMsg:String="";

  loginCheck(){
    console.log(this.loginForm.value.email,"email")
      if(this.email===this.loginForm.value.email && this.password===this.loginForm.value.password ){
        this.router.navigateByUrl('/index')
      }else{
        this.loginErrorMsg="Authentication Failed! Try again";  
        this.loginError=true;    
      }
     
  }

  

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password:new FormControl(null,Validators.required)
    });
  }

}
