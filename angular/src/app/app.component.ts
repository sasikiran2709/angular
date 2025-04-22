import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { PatientComponent } from './patient/patient.component';
import { CalcComponent } from './calc/calc.component';
import { StudentComponent } from './student/student.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DoctorComponent } from './doctor/doctor.component';


@Component({
    selector: 'app-root',
    standalone:true,
    imports: [RouterOutlet, EmployeeComponent, ManagerComponent, PatientComponent, CalcComponent, StudentComponent, RegisterationComponent,DoctorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
