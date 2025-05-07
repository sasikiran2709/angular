import { Component } from '@angular/core';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { FormsModule } from '@angular/forms';
import { newemp } from '../new-employee/newemp.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [NewEmployeeComponent,FormsModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
 emp:newemp[]=[];


 constructor(){
  this.emp=[{Eid: '',
    name: '',
    cell: '',
    email:'',
    exp:''}]
 }



 newemp_add(employee:newemp){
  this.emp.push(employee);
  


     
 }
}
