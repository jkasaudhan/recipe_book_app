import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[];
  
  @Output()
  itemWasSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
    this.recipes = this.recipes;
  }

  recipeWasSelected(recp: Recipe) {
    this.itemWasSelected.emit(recp);
  }
}
