import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cell: string = '';
  pass: string = '';

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid');
      Object.values(form.controls).forEach(control => {
        (control as AbstractControl).markAsTouched();
    });
  }
  }
}
