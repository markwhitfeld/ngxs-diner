import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipeData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  constructor(private http: HttpClient) {}

  public loadRecipes(): Observable<RecipeData> {
    return this.http.get<RecipeData>('/assets/data/recipes.json');
  }
}
