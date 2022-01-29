import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Scnitzel',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnogp9RuaF22YxGMm7T8UXSCI_IlYU_0NZ4A&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Burger',
      'What else yuo want!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnogp9RuaF22YxGMm7T8UXSCI_IlYU_0NZ4A&usqp=CAU',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private slService:ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }
  getRecipes(index:number){
return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
  }
}
