import { Routes } from '@angular/router';
import { PatientDetailsListComponent } from './patient-details-list/patient-details-list.component';
import { PatientdComponent } from './patient/patientd/patientd.component';

export const routes: Routes = [

  { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
  { path: 'patient-list', component: PatientDetailsListComponent },
  { path: 'patient-add', component: PatientdComponent },
];
