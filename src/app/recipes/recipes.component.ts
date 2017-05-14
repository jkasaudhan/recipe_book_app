import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Egg Curry", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg"),
    new Recipe("Egg Curry", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg"),
    new Recipe("Egg Curry", "Boil eggs, potatoes , fry it and mix with spices","http://static.filmannex.com/users/galleries/294783/shagam_018_fa_rszd.jpg")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
