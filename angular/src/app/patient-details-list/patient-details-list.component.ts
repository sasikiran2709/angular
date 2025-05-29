import { Component, OnInit } from '@angular/core';
import { patientd } from '../patient/patientd/patient.model';
import { patient_Details_bloodgroup } from '../patient/patientd/bloodGroup.model';
import { PatientserviceService } from '../patient/patientservice.service';
import { BloodgroupserviceService } from '../patient/patientd/bloodgroupservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-details-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './patient-details-list.component.html',
  styleUrl: './patient-details-list.component.css'
})

export class PatientDetailsListComponent implements OnInit {
   patients: patientd[] = [];
  bloodGroups: patient_Details_bloodgroup[] = [];

  constructor(
    private patientService: PatientserviceService,
    private bloodGroupService: BloodgroupserviceService,private router:Router
  ) { }
  
ngOnInit(): void {
    this.loadBloodGroups();
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe(data => this.patients = data);
  }

  loadBloodGroups() {
    this.bloodGroupService.getBloodGroups().subscribe(data => this.bloodGroups = data);
  }

  getBloodGroupName(bgid: number): string {
    const bg = this.bloodGroups.find(b => b.bgid === bgid);
    return bg ? bg.bloodgroup : 'Unknown';
  }

goToAddPatient(): void {
  this.router.navigate(['/patient-add']);
}
  
}
