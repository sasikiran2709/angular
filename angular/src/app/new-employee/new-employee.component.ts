import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newemp } from './newemp.model';
@Component({
  selector: 'app-new-employee',
  imports: [FormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  @Output() addEmployee = new EventEmitter<newemp>();

  emp: newemp = {
    Eid: '',
    name: '',
    cell: '',
    email: '',
    exp: ''
  };

  addemployee() {
    this.addEmployee.emit(this.emp);
    this.emp = { Eid: '', name: '', cell: '', email: '', exp: '' }; 
  }


  

 

}
