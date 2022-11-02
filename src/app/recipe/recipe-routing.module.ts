import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeComponent} from "./recipe.component";
import {AddRecipeComponent} from "./component/add-recipe/add-recipe.component";
import {RecipeDetailComponent} from "./component/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
  },
  {
    path: 'add',
    component: AddRecipeComponent,
  },
  {
    path: 'detail/:id',
    component: RecipeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
