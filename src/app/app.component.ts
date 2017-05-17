import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

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
  selectedItem: Recipe;
  
  ngOnInit() {
    this.currentState = 'recipe';
  }
  
  changeState(state: string) {
    console.log('active state: ', state);
    this.currentState = state;
  }
}
