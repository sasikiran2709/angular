import { Component } from '@angular/core';

@Component({
    selector: 'app-manager',
    imports: [],
    templateUrl: './manager.component.html',
    styleUrl: './manager.component.css'
})
export class ManagerComponent {
  name:string="sasikiran";
  age:number=31;
isdisabled:boolean=false;
p_fname:string="sasikiran";
p_lname:string="Pamuru"
P_age:number=30;
  save(){
    alert("you clicked me!");
  }
}

