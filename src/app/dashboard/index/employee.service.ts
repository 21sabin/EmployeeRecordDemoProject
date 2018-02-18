
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Employees} from './employee.model'

@Injectable()
export class EmployeeService{
    
    constructor(private http:Http){}

    addEmployee(emp:Employees){
        const employee=JSON.stringify(emp);''
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post("http://localhost:3000/Employees",employee,{headers:headers});
    }

    getEmployeeList(){
        return this.http.get("http://localhost:3000/Employees")
        .map((res:Response)=>{
            const employees=res.json();
            let transformEmployee:Employees[]=[];
            console.log(employees);

            for(let emp of employees){
                transformEmployee.push(new Employees(emp.firstName,emp.lastName,emp.username,emp.email,emp.password,emp.employeeType));
            }
            console.log(transformEmployee,"tranformed dta")
            return transformEmployee;

        })
        .catch((error:Response)=>{
            
            return Observable.throw(error.json())
        })
    }

    
}