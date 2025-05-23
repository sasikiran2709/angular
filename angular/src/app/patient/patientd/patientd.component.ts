import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { patientd } from './patient.model';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patientd.component.html',
  styleUrls: ['./patientd.component.css']  
})
export class PatientdComponent implements OnInit {
  patlist: patientd[] = [];

  constructor(private patientservice: PatientserviceService) {}

  ngOnInit(): void {
    this.patientservice.getPatients().subscribe({
      next: (data) => {
        this.patlist = data;
        
      },
      error: (err) => {
        console.error('Error fetching patients:', err);
      }
    });
  }
}