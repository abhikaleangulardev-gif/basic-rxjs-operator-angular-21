import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-basic-operator',
  imports: [AsyncPipe],
  templateUrl: './basic-operator.html',
  styleUrl: './basic-operator.css',
})
export class BasicOperator implements OnInit,OnDestroy{
  // of operator:-

  myNumber = of(1, 2, 3, 4, 5);
  myValue: any;

  myArray = of(['ram', 12, true]);
  myCombineArray: any

  myObject = of({ name: 'abhishek', age: 33 });
  myCombineObject: any;

  // from operator:-
  myRollNumber = from([10, 20, 30]);
  myRolls: any;

  // promise in from opeartor:-
  promise = Promise.resolve('Data Loaded');

  // take operator:-
  subscription!:Subscription;
  myInterval$: Observable<number> = interval(1000).pipe(
      take(21)
    );
  myTimer!: number;

  ngOnInit(): void {

    // of operator:-

    this.myNumber.subscribe((_resp: any) => {
      this.myValue = _resp;
      console.log(_resp);
    });

    this.myArray.subscribe((_resp: any) => {
      console.log(_resp);
      this.myCombineArray = _resp;
    });

    this.myObject.subscribe((_resp: any) => {
      this.myCombineObject = _resp;
    });

    // form operator:-

    this.myRollNumber.subscribe((_resp: any) => {
      console.log(_resp);
      this.myRolls = _resp;
    });

    // promise:-
    from(this.promise).subscribe((_resp: any) => console.log(_resp));

    // fetch:-
    // from(fetch('https://dummyjson.com/products')).subscribe(res => {
    //   console.log(res);
    // });

    // take:-
    this.subscription = this.myInterval$.subscribe(resp => {
      console.log(resp);
      this.myTimer = resp;
    });
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
