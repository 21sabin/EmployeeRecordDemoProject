import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template:`
  <div style="text-align:center;">
    <h1 [ngStyle]="{color:'red'}">Page Not Found !</h1>

    <button type="button" class="btn btn-pirmary btn-sm" (click)="loginPage()">Go to Login page</button>
  </div>`
})
export class PageNotFoundComponent {

  constructor(private router:Router){}
  loginPage(){
    this.router.navigateByUrl('');
  }
}
