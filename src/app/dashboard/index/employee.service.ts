import { Injectable,EventEmitter, Output } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Employees } from './employee.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeService{
    
    constructor(private http:Http, private router:Router){}
    isEditEmployee = new EventEmitter<Employees>();
    employeeList:Employees[]=[];

    addEmployee(emp:Employees){
        const employee=JSON.stringify(emp);
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post("http://localhost:3000/Employees",employee,{headers:headers});
    }

    getEmlopyeeList(){
        console.log("inside getEmoldfd")
        return this.http.get("http://localhost:3000/Employees")
        .map((res:Response)=>{
            const employees=res.json();
            let transformEmployee:Employees[]=[];

            for(let emp of employees){
                transformEmployee.push(new Employees(emp.email,emp.password,emp.username,emp.employeeType,emp.id));
            }
            this.employeeList=transformEmployee;
            return transformEmployee;

        })
        .catch((error:Response)=>{
            
            return Observable.throw(error.json())
        })
    }

    deleteEmployee(employee:Employees){
        return this.http.delete("http://localhost:3000/Employees/" + employee.eid)
    } 

    editEmployee(employee:Employees){
        debugger;
        this.isEditEmployee.emit(employee);
        this.router.navigateByUrl('/edit');
    }

}