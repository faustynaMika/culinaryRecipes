import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR,} from "@angular/forms";
import {Recipe} from "../../../recipe/model/recipe";
import {Level} from "../../../recipe/model/enum/level";

@Component({
  selector: 'recipe-card',
  template: `
    <div style="height: 100%">
      <a class="group relative block bg-black h-full">
        <img
          alt="img" [src]="URL_PREFIX + recipe.imageUrl"
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
          style="filter: brightness(0.7)"
        />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <p class="text-xl font-bold text-gray-100 uppercase text-center">{{recipe.name}}</p>

          <div class="mt-32 sm:mt-48 lg:mt-32">
            <div
              class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p class="text-sm text-gray-100"
                 style="display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;">
                {{recipe.description}}
              </p>
              <p class="text-xs text-white">Trudność:  {{recipe.level}}</p>
              <p class="text-xs text-white">Czas:  {{recipe.prepareTime}}min</p>
            </div>
          </div>
        </div>
      </a>
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

}
