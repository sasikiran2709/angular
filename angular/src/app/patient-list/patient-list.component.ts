import { Component } from '@angular/core';
import { patient } from './patient.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-patient-list',
  standalone:true,  
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {

  state:string[]=['AP','KA']
  patient_list: patient[] ;
  
    constructor() {
      // 🔸 Initialize the variable
      this.patient_list =  [
        { 
          Pid: 1, 
          fname: 'sasikiran', 
          lname: 'pamuru', 
          bggroup: 'o+ve', 
          disease: 'nothing', 
          age: 30 
        },
        { 
          Pid: 2, 
          fname: 'varun', 
          lname: 'kumar', 
          bggroup: 'o-ve', 
          disease: 'nothing', 
          age: 28
        },
        { 
          Pid: 3, 
          fname: 'akhil', 
          lname: 'kumar', 
          bggroup: 'Ab+ve', 
          disease: 'nothing', 
          age: 25 
        },
        { 
          Pid: 4, 
          fname: 'kiran', 
          lname: 's', 
          bggroup: 'ab-ve', 
          disease: 'nothing', 
          age: 30 
        },
        { 
          Pid: 5, 
          fname: 'sai', 
          lname: 'kumar', 
          bggroup: 'A+ve', 
          disease: 'nothing', 
          age: 30 
        },
        { 
          Pid: 6, 
          fname: 'sathish', 
          lname: 'kumar', 
          bggroup: 'A-ve', 
          disease: 'nothing', 
          age: 30 
        }
      ];
       
  
      
      
    }
}
