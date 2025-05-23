import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, of, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone:true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent  implements OnInit {
//  observable = new Observable(
//   x=>
//     {
//     x.next(79),x.next(89),x.next(300) 
//    }
// // x=>{
// // x.next(-10),x.next(-20);
// // setTimeout(()=>{console.log('sasikiran');},2000);

// // }
// );


//  //observer={  next:function(t:any){alert(t);}};
//   constructor()
//   {
//     this.observable.subscribe((t:any)=>{console.log(t);});
//   }
// obs=of(10,20,30);
// subscription: Subscription | null = null;

//oberver={next:function(inp:any){console.log(inp);}}
// ngOnInit(){
// this.obs.subscribe((inp:any)=>{console.log(inp);})
// }

// ngOnDestroy(): void {
//   if (this.subscription) {
//     this.subscription.unsubscribe();
//     alert("destroying node")
//   }
// }
ngOnInit(): void {
  skip(1)(map((x:any)=>x*2)(of(50,60,80,90))).subscribe(ip=>{console.log(ip);});
}
on=of(300, 400, 500,600,800,100,400).pipe(map((x => x * 2)),skip(1),take(2)).subscribe({
    next: value => console.log(value) 
   
  });

}



