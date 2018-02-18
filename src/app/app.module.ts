import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './dashboard/index/index.component'
import {Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component'
import {EmployeeService} from './dashboard/index/employee.service';
import {SignupComponent} from './auth/signup/signup.component';
import {PageNotFoundComponent} from './pageNotFoundComponent';
import { EditComponent } from './dashboard/edit/edit.component';
import { FilterPipe } from './dashboard/index/filter.pipe';





const routes:Routes=[
 
  {path:'',component:LoginComponentComponent},
  {path:'signup',component:SignupComponent},
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponentComponent},
  {path:'**', component:PageNotFoundComponent}
 
 

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    IndexComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SignupComponent,
    EditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
