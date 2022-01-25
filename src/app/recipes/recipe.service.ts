import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnogp9RuaF22YxGMm7T8UXSCI_IlYU_0NZ4A&usqp=CAU'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnogp9RuaF22YxGMm7T8UXSCI_IlYU_0NZ4A&usqp=CAU'
    ),
  ];
  getRecipe(){
      return this.recipes.slice();
  }
}
