import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR,} from "@angular/forms";
import {Recipe} from "../../../recipe/model/recipe";
import {Level} from "../../../recipe/model/enum/level";
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-card',
  template: `
    <article class="flex bg-white border border-gray-200 transition hover:shadow-xl rounded-md p-1">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
          {{recipe.created_at | date: 'yyyy-MM-dd'}}
        </time>
      </div>
      <div class="hidden sm:block sm:basis-56 ">
        <img [src]="URL_PREFIX + recipe.imageUrl"
             class=" rounded-md aspect-square h-full w-full object-cover"/>
      </div>
      <div class="flex flex-1 flex-col justify-between">
        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a>
            <h3 class="font-bold uppercase text-gray-900">
              {{recipe.name}}
            </h3>
          </a>
          <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
            {{recipe.description}}
          </p>
          <p class="font-bold uppercase text-gray-900">POZIOM TRUDNOŚCI:{{recipe.level}}</p>
          <p class="font-bold uppercase text-gray-900">Czas przygotowania:{{recipe.prepareTime}}min</p>
          <button class="text-amber-400 text-sm" (click)="goTo()">...rozwiń</button>
        </div>
      </div>
    </article>
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
  constructor(private _router: Router) { }
  URL_PREFIX: string = 'https://hkmzuksvnboqgacevstn.supabase.co/storage/v1/object/public/recipe-storage/';
  goTo() {
    this._router.navigate(['recipe/detail/' + this.recipe.id]);
  }
}
