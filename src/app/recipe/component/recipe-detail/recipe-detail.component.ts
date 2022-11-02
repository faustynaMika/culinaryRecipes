import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {Level} from "../../model/enum/level";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {RecipeService} from "../../../_shared/service/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = {description: "", ingredients: [], level: Level.EASY, name: "", prepareTime: 0, steps: [], tags: []}
  URL_PREFIX: string = 'https://hkmzuksvnboqgacevstn.supabase.co/storage/v1/object/public/recipe-storage/';

  constructor(public activatedRoute: ActivatedRoute, public service: RecipeService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.service.get(params['id']).then(value => this.recipe = value)
    });
  }

}
