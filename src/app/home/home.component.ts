import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe/model/recipe";
import {RecipeService} from "../_shared/service/recipe.service";
import {Level} from "../recipe/model/enum/level";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favouriteRecipes: Recipe[] | null = [];
  private service: RecipeService;

  constructor(service: RecipeService) {
    this.service = service
  }

  ngOnInit() {
    let description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    this.service.getFavourites().then(value => this.favouriteRecipes = value)
  }
}
