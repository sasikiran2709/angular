import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
@Component({
  selector: 'app-custompipes',
  standalone:true,
  imports: [ReversePipe],
  templateUrl: './custompipes.component.html',
  styleUrl: './custompipes.component.css'
})


export class CustompipesComponent {
 

  sampleText: string = 'Angular';
}
