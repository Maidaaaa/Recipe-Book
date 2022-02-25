import { ShoppingListService } from './../shopping-list/shopping-list.service';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private  recipes: Recipe[] = [
        new Recipe ('A test recipe', 'this is simply a test','https://www.seriouseats.com/thmb/Bxn7BkuvblQOPdKwH8QHga0PjO0=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-new-orleans-muffuletta-recipe-Hero1-ee95576a16584f298d6abe7fac80712b.jpg', [
          new Ingredient('Meat', 1),
          new Ingredient('French fries', 20 )
        ]),
        new Recipe ('Another test recipe', 'this is simply a test','https://www.seriouseats.com/thmb/Bxn7BkuvblQOPdKwH8QHga0PjO0=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-new-orleans-muffuletta-recipe-Hero1-ee95576a16584f298d6abe7fac80712b.jpg', [
          new Ingredient('Buns',2),
          new Ingredient('Meat', 2)
        ])
    
      ];
      constructor(private slService: ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients)
      }
}