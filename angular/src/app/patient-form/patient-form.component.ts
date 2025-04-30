import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  platformForm: FormGroup;

  constructor(private fm: FormBuilder) {

    this.platformForm = this.fm.group
      (
        {
          firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]{3,}$')]],
          lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]{3,}$')]],
          age: [0, [Validators.required, Validators.min(15), Validators.max(70), Validators.pattern('^(1[5-9]|[2-6][0-9]|70)$')]],
          bg: ['', [Validators.required]]
        }
      );
  }
  bg_list: string[] = ['O+ve', 'O-ve', 'A+ve', 'A-ve', 'B+ve', 'B-ve', 'AB+ve', 'AB-ve'];

  // platformForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]{3,}$')]),
  //   lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]{3,}$')]),
  //   age: new FormControl(0, [Validators.required, Validators.min(15), Validators.max(70), Validators.pattern('^(1[5-9]|[2-6][0-9]|70)$')]),
  //   bg: new FormControl('', [Validators.required]) 
  // });

  get model() { return this.platformForm.controls; }

  submittedData: any = null;
  formSubmitted = false;
  add() {
    this.formSubmitted = false;

    if (this.platformForm.invalid) {
      this.platformForm.markAllAsTouched();
      return;
    }

    // Capture submitted form data
    this.submittedData = this.platformForm.value;
    this.formSubmitted = true;

    // Optionally reset the form
    this.platformForm.reset();

  }

}