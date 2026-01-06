import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Combinelatest {
  myRecipeUrls: string = 'https://dummyjson.com/recipes';
  myUserUrls: string = 'https://jsonplaceholder.typicode.com/users';
  myPostsUrls: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getRecipeUrls() {
    return this.http.get(this.myRecipeUrls);
  }

  getUsersUrls() {
    return this.http.get(this.myUserUrls);
  }

  getPostsUrls() {
    return this.http.get(this.myPostsUrls);
  }

  // combinelatest useing operator
  getCombineLatestList() {
    return combineLatest([this.getRecipeUrls(), this.getUsersUrls(), this.getPostsUrls()]);
    
    // return combineLatest({
    //   recipe: this.getRecipeUrls(),
    //   users: this.getUsersUrls(),
    //   posts: this.getPostsUrls()
    // })

  }
}
