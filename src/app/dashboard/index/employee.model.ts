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

<<<<<<< HEAD
<<<<<<< HEAD
        constructor(private email:string,
            private password:string,
            public username:string,
            private employeeType:string,
              public eid?:string){
=======
=======
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
        firstName:string;
        lastName:string;
        username:string;
        email:string;
        password:string;
        employeeType:string;
        

        constructor(firstName:string,lastName:string,
                    username:string,email:string,
                    password:string,employeeType:string){
<<<<<<< HEAD
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
=======
>>>>>>> 3a623ed9d625172ddef76395a5d159eae7138d6d
            this.email=email;
            this.password=password;
            this.username=username;
            this.firstName=firstName;
            this.lastName=lastName;
            this.employeeType=employeeType;
            this.eid=eid;
        }
}