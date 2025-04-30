import { Component } from '@angular/core';
import { student } from './student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-student',
    imports: [FormsModule,CommonModule],
    templateUrl: './student.component.html',
    styleUrl: './student.component.css'
})
export class StudentComponent {
  
  myStudent: student ;
dob:Date=new  Date('27sept1993') ;
D:Date=new  Date('1993,27,09') ;
  constructor() {
    // 🔸 Initialize the variable
    this.myStudent = {
      name:"sasikiran",
      cell:"8875236902",
      course:"dotnet",
      email:"xyz@gmail.com",
      fee:200000

      
    };
    
  }
 
}
