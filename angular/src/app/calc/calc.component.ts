import { Component } from '@angular/core';

@Component({
    selector: 'app-calc',
    imports: [],
    templateUrl: './calc.component.html',
    styleUrl: './calc.component.css'
})
export class CalcComponent {
//   add():void{
//  let x:any=document.getElementById('tbx');
//  let y:any=document.getElementById('tby');
//  let res:any= parseInt(x.value) + parseInt(y.value);
//  alert(res);
 add(v1:any,v2:any):void{
  alert(parseInt(v1.value)+parseInt(v2.value));
  v1.value="";
  v2.value="";

  }
}
