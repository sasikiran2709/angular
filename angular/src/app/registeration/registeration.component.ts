
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-registeration',
    standalone:true,
    imports: [CommonModule, FormsModule],
    templateUrl: './registeration.component.html',
    styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  // dropdown
 //state:string='KA';
 //end

 //gender
//  gender: string = 'male'; // Or 'Male' to set default
//end
X:number=101;
//checkbox

   checkbox1: boolean = false;

  //  fn()
  //  {
  //   alert(`${this.state},${this.gender},${this.checkbox1}`);
  //  }

//  Gender:string="female";
 
 namem:string="somanath";
 ender:string="male";
namef="vani"

members:string[]=['x','t','r'];
calval:string='B';

}




   
  
  

  