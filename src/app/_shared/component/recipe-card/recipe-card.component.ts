import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR,} from "@angular/forms";
import {Recipe} from "../../../recipe/model/recipe";
import {Level} from "../../../recipe/model/enum/level";
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-card',
  template: `
    <div class="h-full">
      <button class="h-full" (click)="goTo()">
        <div class="max-w-lg p-4 shadow-md bg-gray-900 border-2 border-gray-500 shadow-xl shadow-gray-500 text-gray-200 text-start rounded-xl h-full">
          <div class="space-y-4">
            <div class="space-y-2">
              <img alt="img" [src]="URL_PREFIX + recipe.imageUrl"
                   class="block object-cover object-center w-full rounded-md h-72 bg-gray-500">
              <div class="flex items-center text-xs">
                <span> {{recipe.created_at | date: 'yyyy-MM-dd'}}</span>
              </div>
            </div>
            <div class="space-y-2 h-full">
              <h3 class="text-xl text-sky-500">{{recipe.name}}</h3>
              <p class="leading-snug text-gray-200"
                 style="display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;">
                {{recipe.description}}</p>
              <p class="leading-snug text-blue-200">{{recipe.level}}</p>
              <p class="leading-snug text-blue-200">{{recipe.prepareTime}} min</p>
            </div>
          </div>
        </div>
      </button>
    </div>


  `,
  styles: [],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RecipeCardComponent
    }
  ]
})
export class RecipeCardComponent {
  @Input() recipe: Recipe = {
    description: "",
    ingredients: [],
    level: Level.EASY,
    name: "",
    prepareTime: 0,
    steps: [],
    tags: [],
  }
  URL_PREFIX: string = 'https://hkmzuksvnboqgacevstn.supabase.co/storage/v1/object/public/recipe-storage/';

  constructor(private _router: Router) {
  }

  goTo() {
    this._router.navigate(['recipe/detail/' + this.recipe.id]);
  }
}
