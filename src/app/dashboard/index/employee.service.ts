
import {Injectable,EventEmitter} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Employees} from './employee.model'

@Injectable()
export class EmployeeService{
    
    constructor(private http:Http){}
    isEditEmployee=new EventEmitter<Employees>();
    employeeList:Employees[]=[];

    addEmployee(emp:Employees){
        const employee=JSON.stringify(emp);
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post("http://localhost:3000/Employees",employee,{headers:headers});
    }

<<<<<<< HEAD
    getEmlopyeeList(){
        console.log("inside getEmoldfd")
=======
    getEmployeeList(){
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
        return this.http.get("http://localhost:3000/Employees")
        .map((res:Response)=>{
            const employees=res.json();
            let transformEmployee:Employees[]=[];
<<<<<<< HEAD

            for(let emp of employees){
                transformEmployee.push(new Employees(emp.email,emp.password,emp.username,emp.employeeType,emp.id));
            }
            this.employeeList=transformEmployee;
=======
            console.log(employees);

            for(let emp of employees){
                transformEmployee.push(new Employees(emp.firstName,emp.lastName,emp.username,emp.email,emp.password,emp.employeeType));
            }
            console.log(transformEmployee,"tranformed dta")
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
            return transformEmployee;

        })
        .catch((error:Response)=>{
            
            return Observable.throw(error.json())
        })
    }
<<<<<<< HEAD

  deleteEmployee(employee:Employees){
        return this.http.delete("http://localhost:3000/Employees/"+employee.eid)
  } 

  editEmployee(employee:Employees){
    this.isEditEmployee.emit(employee);
  }

    
=======
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d

    
}