import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Switchmapshared } from '../../shared/switchmapshared';

@Component({
  selector: 'app-switchmap',
  imports: [FormsModule],
  templateUrl: './switchmap.html',
  styleUrl: './switchmap.css',
})
export class Switchmap implements OnInit {
  mySearchControl: any;
  constructor(private switchmapservice: Switchmapshared) { }

  ngOnInit(): void { }

  onSearchChange(event: string) {
    const myRecipeName: string = event;
    this.switchmapservice.getRecipeUrls(myRecipeName).subscribe({
      next: (_resp: any) => {
        console.log(_resp);
      }
    })
  }

}
