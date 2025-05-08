import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { PatientComponent } from './patient/patient.component';
import { CalcComponent } from './calc/calc.component';
import { StudentComponent } from './student/student.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientgroupComponent } from './patientgroup/patientgroup.component';
import { LoginComponent } from './login/login.component';
import { PateintDetailsComponent } from './pateint-details/pateint-details.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AComponent } from './a/a.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PatientdComponent } from './patient/patientd/patientd.component';




@Component({
    selector: 'app-root',
    standalone:true,
    imports: [RouterOutlet, EmployeeComponent, ManagerComponent, PatientComponent, CalcComponent, StudentComponent,RegisterationComponent,DoctorComponent,
      PatientListComponent,PatientgroupComponent,LoginComponent,PateintDetailsComponent,PatientFormComponent,AComponent
    ,EmployeeListComponent,PatientdComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
