import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { patientd } from './patient.model';
import { PatientserviceService } from '../patientservice.service';
@Component({
  selector: 'app-patientd',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './patientd.component.html',
  styleUrl: './patientd.component.css'
})
export class PatientdComponent {
  patlist:patientd[];
  constructor(private pat:PatientserviceService){
    this.patlist= this.pat.getpatientdetails()
  }
 
}
