
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    selector: 'app-registeration',
    imports: [CommonModule],
    templateUrl: './registeration.component.html',
    styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  // dropdown
 //state:string='KA';
 //end
 
 //gender
 gender: string = 'male'; // Or 'Male' to set default
//end

//checkbox

   checkbox1: boolean = false;

  //  fn()
  //  {
  //   alert(`${this.state},${this.gender},${this.checkbox1}`);
  //  }

 Gender:string="female";

 
}




   
  
  

  