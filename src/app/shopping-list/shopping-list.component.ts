import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input()
  ingredeints: Ingredient[];
  
  @Output()
  onIngredientAdded = new EventEmitter<Ingredient>();
  
  @Output()
  onReset = new EventEmitter<void>();
  
  @ViewChild('inputIngredientName') inputIngredientName: ElementRef;
  
  @ViewChild('inputIngredientAmt') inputIngredientAmt: ElementRef;
  
  constructor() { }

  ngOnInit() {
  this.ingredeints = this.ingredeints;
  }
  
  addIngredient() {
      const name = this.inputIngredientName.nativeElement.value;
      const amount = this.inputIngredientAmt.nativeElement.value;
      const item = new Ingredient(name, amount);
      this.onIngredientAdded.emit(item);
  }
  
  resetList() {
    this.onReset.emit();
  }
}
