import { Component } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component';

@Component({
    selector: 'app-employee',
    imports: [DoctorComponent],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  display(name:string,age:string,sal:string,exp:string,qual:string){
    
console.log(`${name},${age},${sal},${exp},${qual}`)
  }
  // name:string="sasikiran";
  // age:number=31;
  // educ:string="b.tech";
  // passout:number=2015;

}
