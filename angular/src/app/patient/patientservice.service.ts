import { Injectable } from '@angular/core';
import { patientd } from './patientd/patient.model';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
patlist:patientd[]=[];
  private apiUrl = 'https://localhost:7182/api/Patient'; // Preferably use environment variable

  constructor(private http: HttpClient) {}

  getPatients(): Observable<patientd[]> {
    return this.http.get<patientd[]>(this.apiUrl)
      
  }
}
