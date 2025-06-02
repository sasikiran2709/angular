import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { patient_Details_bloodgroup } from './bloodGroup.model';

@Injectable({
  providedIn: 'root'
})
export class BloodgroupserviceService {

  constructor(private http:HttpClient) { }

  private bgurl='https://localhost:7182/api/BloodGroup';

    getBloodGroups(): Observable<patient_Details_bloodgroup[]> {
    return this.http.get<patient_Details_bloodgroup[]>(this.bgurl);

   
  }
}
