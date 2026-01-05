import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Switchmapshared {
  myRecipeUrls: string = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) { }

  getRecipeUrls(myRecpieName?: string) {
    // console.log('myRecpieName service >>>>',myRecpieName);
    return this.http.get(this.myRecipeUrls).pipe(
      switchMap((_recipe: any) => {
        let filterRecipes = _recipe.recipes;

        if (myRecpieName) {
          filterRecipes = _recipe.recipes.filter((recipe: any) => recipe.name.toLowerCase().includes(myRecpieName.toLowerCase()));
        }

        return of(filterRecipes);
      })
    )
  }
}
