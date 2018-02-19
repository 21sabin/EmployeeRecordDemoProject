import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent, SignupComponent } from './auth/index';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './dashboard/index/index.component'
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component'
import { EmployeeService } from './dashboard/index/employee.service';
import { PageNotFoundComponent } from './pageNotFoundComponent';
import { EditComponent } from './dashboard/edit/edit.component';


const routes:Routes=[
 
  {path:'',component:LoginComponentComponent},
  {path:'signup',component:SignupComponent},
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponentComponent},
  {path:'edit',component:EditComponent},
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
    EditComponent
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
