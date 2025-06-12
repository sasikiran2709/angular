import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { PatientserviceService } from '../../patientservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BloodgroupserviceService } from '../bloodgroupservice.service';
import { patient_Details_bloodgroup } from '../bloodGroup.model';


@Component({
  selector: 'app-display-patientdetails',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './display-patientdetails.component.html',
  styleUrl: './display-patientdetails.component.css'
})
export class DisplayPatientdetailsComponent implements OnInit {
  patientId: number = 0;
  patient: any;
  bloodGroups:patient_Details_bloodgroup[]=[];

  constructor(private route: ActivatedRoute, 
    private patientservice: PatientserviceService,private bloodGroupService:BloodgroupserviceService, private router:Router) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.patientId = Number(params.get('id'));

    this.patientservice.getPatientById(this.patientId).subscribe({
      next: (data) => {
        this.patient = data;
        console.log('Patient fetched:', data);
      },
      error: (err) => {
        console.error('Failed to load patient by ID', err);
      }
    });
    
 this.bloodGroupService.getBloodGroups().subscribe({
      next: (bgdata) => this.bloodGroups = bgdata,
      error: (err) => console.error('Failed to load blood groups', err)
    });
  });
  
  }
  getBloodGroupName(bgid: number): string {
  const group = this.bloodGroups.find(bg => bg.bgid === bgid);
  return group ? group.bloodgroup : 'Unknown';
}


}

