import { Component } from '@angular/core';
import { AComponent } from "../a/a.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-b',
  standalone:true,
  imports: [AComponent,CommonModule,FormsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  comp_name:string="palle consulting srvices";
  x:number=10;
  y:number=10;
  z:number=10;
  L:number=this.x+this.y+this.z;
  per_name:string='';
save(){

}

}
