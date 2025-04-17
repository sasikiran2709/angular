import { Component } from '@angular/core';
import { student } from './student.model';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-student',
    imports: [FormsModule],
    templateUrl: './student.component.html',
    styleUrl: './student.component.css'
})
export class StudentComponent {
  
  myStudent: student ;

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
