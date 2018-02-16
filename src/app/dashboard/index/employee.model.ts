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

        constructor(private email:string,private password:string,private username:string,private employeeType:string){
            this.email=email;
            this.password=password;
            this.username=username;
            this.employeeType=employeeType;
        }
}