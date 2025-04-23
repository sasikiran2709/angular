
export class patient{
    Pid:number;
    fname:string;
    lname:string;
    bggroup:string;
    disease:string;
    age:number;
    constructor(Pid:number, fname:string,lname:string,bggroup:string,disease:string,age:number){
        this.Pid=Pid;
        this.fname=fname;
        this.lname=lname;
        this.bggroup=bggroup;
        this.disease=disease;
        this.age=age;
    }
}