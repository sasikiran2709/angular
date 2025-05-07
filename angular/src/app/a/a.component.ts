import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [FormsModule, BComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  // x: number = 0;
  // y: number = 0;
  result: number = 0;

  emitAdd(sum: number) {
    this.result = sum;  
  }

  emitSub(diff: number) {
    this.result = diff;
  }
}