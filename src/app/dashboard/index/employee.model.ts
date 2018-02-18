export class Employees{

        // constructor(private email:string,
        //     private password:string,
        //     private username?:string,
        //     private employeeType?:string,
        //     private image?:string
        // ){
        //     this.email=email;
        //     this.password=password;
        //     this.username=username;
        //     this.employeeType=employeeType,
        //     this.image=image

        // }

        firstName:string;
        lastName:string;
        username:string;
        email:string;
        password:string;
        employeeType:string;
        

        constructor(firstName:string,lastName:string,
                    username:string,email:string,
                    password:string,employeeType:string){
            this.email=email;
            this.password=password;
            this.username=username;
            this.firstName=firstName;
            this.lastName=lastName;
            this.employeeType=employeeType;
        }
}