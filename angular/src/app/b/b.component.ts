import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  //input
  //  @Input() comp_name:string="";
  //  @Input() i:any;
  //  @Input() j:any;

  //  z:number=0;

  //  add(){
  //  this.z= Number(this.i)+Number(this.j);
  //  }
  x: number = 0;
  y: number = 0;

  @Output() i = new EventEmitter<number>(); // Add
  @Output() j = new EventEmitter<number>(); // Sub

  emitAdd() {
    this.i.emit(this.x + this.y);
  }

  emitSub() {
    this.j.emit(this.x - this.y);
  }

}