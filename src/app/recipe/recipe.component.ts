import {Component, OnInit} from '@angular/core';
import {Recipe} from "./model/recipe";
import {RecipeService} from "../_shared/service/recipe.service";

@Component({
  selector: 'recipe-root',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  recipes: Recipe[] = [];
  private service: RecipeService;

  constructor(service: RecipeService) {
    this.service = service;
  }
  async ngOnInit() {
    let recipes = await this.service.getAll()

    if (recipes == null) {
      this.recipes == []
    } else {
      this.recipes = recipes
    }
  }
}
