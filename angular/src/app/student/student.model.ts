export class student{
    name:string;
    cell:string;
    course:string;
    email:string;
    fee:number;
    constructor( name:string,cell:string,course:string,email:string,fee:number){
        this.name=name;
        this.cell=cell;
        this.course=course;
        this.email=email;
        this.fee=fee;
    }
}