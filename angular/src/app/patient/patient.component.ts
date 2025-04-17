import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-patient',
    imports: [FormsModule],
    templateUrl: './patient.component.html',
    styleUrl: './patient.component.css'
})
export class PatientComponent {

  Pid:number=12
  fname:string="sasikiran"
  Lname:string="pamuru"
  age:number=30
  bg:string="O+ve"

  noofcells:number=3;

  name:string="sasi";
  display():void{
    console.log(this.name);
  }
}
