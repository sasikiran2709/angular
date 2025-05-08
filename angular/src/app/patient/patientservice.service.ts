import { Injectable } from '@angular/core';
import { patientd } from './patientd/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

 
patlist:patientd[]=[];
  getpatientdetails(){
    let p1:patientd=new patientd(1,'x','y','o+ve');
    let p2:patientd=new patientd(2,'a','b','o-ve');
    let p3:patientd=new patientd(3,'r','s','a+ve');
    this.patlist.push(p1,p2,p3);
    return this.patlist

  }
}
