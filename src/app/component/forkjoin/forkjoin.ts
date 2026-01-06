import { Component, OnDestroy, OnInit } from '@angular/core';
import { Shared } from '../../shared/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  imports: [],
  templateUrl: './forkjoin.html',
  styleUrl: './forkjoin.css',
})
export class Forkjoin implements OnInit,OnDestroy{
  subscription!:Subscription;
  constructor(private sharedservice:Shared){}

  ngOnInit(): void {
    this.getDetailsList();
  }

  getDetailsList(){
    this.subscription = this.sharedservice.allGetDetailsList().subscribe({
      next:(_resp:any)=>{
        setTimeout(()=> console.log(_resp),2000);
      },
      error:(_error:Error)=>{
        console.log(_error);
      },
      complete:()=>{
        console.log("Successfully Getting All Details..."); 
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
