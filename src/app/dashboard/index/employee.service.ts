
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

    // // getEmlopyeeList(){
    // //     return this.http.get("http://localhost:3000/Employee")
    // //     .map((res:Response)=>{
    // //         const todos=res.json();
    // //         let transformTodos:Employees[]=[];
    // //         console.log(todos)

    // //         // for(let todo of todos){
    // //         //     transformTodos.push(new Employees(todo.id,todo.todo));
    // //         // }
    // //         // console.log(transformTodos,"tranfromed dta")
    // //         // return transformTodos;

    // //     })
    // //     .catch((error:Response)=>{
            
    // //         return Observable.throw(error.json())
    // //     })
    // }

    
}