import { Component, OnInit } from '@angular/core';
import { Combinelatest } from '../../shared/combinelatest';

@Component({
  selector: 'app-combine-latest',
  imports: [],
  templateUrl: './combine-latest.html',
  styleUrl: './combine-latest.css',
})
export class CombineLatest implements OnInit {
  constructor(private combinelatestservice: Combinelatest) { }

  ngOnInit(): void {
    this.getCombineAllDetailsList();
  }

  getCombineAllDetailsList() {
    this.combinelatestservice.getCombineLatestList().subscribe({
      next: (_resp: any) => {
        console.log(_resp);
      },
      error: (_error: Error) => {
        console.log(_error);
      },
      complete: () => {
        console.log('successfully getting all combine latest data.....');
      }
    })
  }
}
