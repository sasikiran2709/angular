import { Routes } from '@angular/router';
import { PatientDetailsListComponent } from './patient-details-list/patient-details-list.component';
import { PatientdComponent } from './patient/patientd/patientd.component';
import { DisplayPatientdetailsComponent } from './patient/patientd/display-patientdetails/display-patientdetails.component';

export const routes: Routes = [

  
  { path: 'patient-list', component: PatientDetailsListComponent },
  { path: 'patient-add', component: PatientdComponent },
  { path: 'details/:id', component: DisplayPatientdetailsComponent },
  { path: '', redirectTo: 'patient-list', pathMatch: 'full' }
  
  
];
