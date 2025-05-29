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

   // Get all patients
  getPatients(): Observable<patientd[]> {
    return this.http.get<patientd[]>(this.apiUrl);
  }

  // Get a patient by id
  getPatientById(id: number): Observable<patientd> {
    return this.http.get<patientd>(`${this.apiUrl}/${id}`);
  }

  // Add a new patient
  addPatient(patient: patientd): Observable<patientd> {
    return this.http.post<patientd>(this.apiUrl, patient,{headers:{ 'Content-Type': 'application/json'}});
  }

  // Update an existing patient
  updatePatient(id: number, patient: patientd): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, patient,{headers:{ 'Content-Type': 'application/json'}});
  }

  // Delete a patient
  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
