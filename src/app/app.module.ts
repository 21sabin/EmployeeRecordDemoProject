import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './dashboard/index/index.component'
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
