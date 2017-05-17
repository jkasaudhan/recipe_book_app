import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentState: string;
  recipes: Recipe[] = [
    new Recipe("Egg Curry1", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg"),
    new Recipe("Egg Curry2", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg"),
    new Recipe("Egg Curry3", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg")
  ];

 ingredeints: Ingredient[] = [
    new Ingredient("Potatoes", 3),
    new Ingredient("Tomatoes", 3),
    new Ingredient("Eggs", 3)
  ];
  
  selectedItem: Recipe;
  
  ngOnInit() {
    this.currentState = 'recipe';
  }
  
  changeState(state: string) {
    console.log('active state: ', state);
    this.currentState = state;
  }
  
  addIngredient(ingred: Ingredient) {
   console.log("Item to buy: ", ingred);
   this.ingredeints.push(ingred);
  }
  
  resetShoppingList() {
    console.log("reset shopping list");
    this.ingredeints = [];
  }
}
