import { Component } from '@angular/core';
import { patient_Details } from './patient-details-list.model';
import { bg_list } from './patinet-details-bg.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pateint-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pateint-details.component.html',
  styleUrls: ['./pateint-details.component.css']
})
export class PateintDetailsComponent {
  bloodgroup: bg_list[] = [];  // This is where the blood groups will be stored
  pat: patient_Details = new patient_Details(0, '', '', 0, 0);

  constructor() {
    this.bloodgroup = [
      new bg_list(1, 'O+ve'),
      new bg_list(2, 'O-ve'),
      new bg_list(3, 'A+ve'),
      new bg_list(4, 'A-ve'),
      new bg_list(5, 'B+ve'),
      new bg_list(6, 'B-ve'),
      new bg_list(7, 'AB+ve'),
      new bg_list(8, 'AB-ve')
    ];
  }
  onSubmit() {
    if (this.pat.Pid && this.pat.fname && this.pat.Lname && this.pat.age && this.pat.bg_id) {
      console.log('Form submitted!', this.pat);
    } else {
      console.log('Form is invalid!');
    }
  }
}
