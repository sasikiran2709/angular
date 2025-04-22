import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-doctor',
    imports: [CommonModule,FormsModule],
    templateUrl: './doctor.component.html',
    styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  name:string="varun";
  age:number=31;
  depart:string="pediatrics";
  exp:number=12;
  
  
}
