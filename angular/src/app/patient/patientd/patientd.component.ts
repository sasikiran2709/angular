import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  patientd} from './patient.model';
import { patient_Details_bloodgroup } from './bloodGroup.model';
import { BloodgroupserviceService } from './bloodgroupservice.service';
import { FormsModule } from '@angular/forms';
import { PatientserviceService } from '../patientservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patientd.component.html',
  styleUrls: ['./patientd.component.css']  
})
export class PatientdComponent implements OnInit {
  patients: patientd[] = [];
  patient: patientd = {
    pid:0,
    fname: '',
    lname: '',
    age: 0,
    bgid:0
  };
searchPid: number = 0;
  bloodGroups: patient_Details_bloodgroup[] = [];

  constructor(private bloodGroupService: BloodgroupserviceService,private patientService: PatientserviceService,private router: Router) {}


 
  ngOnInit(): void {
    
    this.loadBloodGroups(); 
  }
loadBloodGroups(): void {
  this.bloodGroupService.getBloodGroups().subscribe(data => {
    this.bloodGroups = data;
    
  });
}
  
 onAdd():void
  {

  if (!this.isFormValid('add')) {
    alert('Please fix the errors in the form before adding.');
    return;
  }
  {
    this.patientService.addPatient(this.patient).subscribe(() => {
      alert('Patient added successfully!');
     this.router.navigate(['/patient-list']);
     
    });
  }
  
  
}

onUpdate():void {
  if (!this.isFormValid('update')) {
    alert('Please fix the errors in the form before updating.');
    return;
  }
  else{
     this.patientService.updatePatient(this.patient.pid, this.patient).subscribe(() => {
      alert('Patient updated successfully!');
      this.router.navigate(['/patient-list']);
    });
  }
  console.log('Updating patient:', this.patient);
  // Update patient logic here
}

onDelete() {
  if (!this.isFormValid('delete')) {
    alert('Please enter a valid Patient ID before deleting.');
    return;
  }
  {
    this.patientService.deletePatient(this.patient.pid).subscribe(() => {
      alert('Patient deleted successfully!');
      this.router.navigate(['/patient-list']);
    });
  }
  console.log('Deleting patient:', this.patient);
  // Delete patient logic here
}

  // You could improve this by using ViewChild to check form validity, but for demo:
  isFormValid(action: 'add' | 'update' | 'delete'): boolean {
  const pidValid = this.patient.pid !== 0 && this.patient.pid > 0;

  if (action === 'delete') {
    return pidValid; 
  }

  const basicValid =
    this.patient.fname.length >= 3 &&
    this.patient.lname.length >= 3 &&
    this.patient.age !== null &&
    /^(1[5-9]|[2-6][0-9]|70)$/.test(this.patient.age?.toString() || '') &&
    this.patient.bgid!= 0;

  if (action === 'add') {
    return basicValid;
  } else {
    return basicValid && pidValid;
  }
}
searchPatientById(): void {
  if (!this.searchPid || this.searchPid <= 0) {
    alert('Please enter a valid Patient ID to search.');
    return;
  }

  this.patientService.getPatientById(this.searchPid).subscribe({
    next: (data) => {
      this.patient = data;
    },
    error: (err) => {
      alert('Patient not found or error occurred.');
      console.error(err);
    }
  });
}
 getPatientById(pid: number): void {
    this.patientService.getPatientById(pid).subscribe(data => {
      this.patient = data;
    });
  }
  Viewtabel():void{
    this.router.navigate(['/patient-list'])
  }
}

  
