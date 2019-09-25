import { Component, OnInit } from '@angular/core';
import { IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Potatoes', 5),
    new IngredientModel('Tomatoes', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    if (ingredient.amount > 0) {
      this.ingredients.push(ingredient);
    }
  }
}
