import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {RecipeService} from "../../../_shared/service/recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[] | null = [];


  constructor() {
  }

  ngOnInit(): void {

  }

}
