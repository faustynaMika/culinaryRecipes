import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeRoutingModule} from "./recipe-routing.module";
import {RecipeComponent} from "./recipe.component";
import {AddRecipeComponent} from './component/add-recipe/add-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../_shared/shared.module";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    RecipeComponent,
    AddRecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ]
})
export class RecipeModule {
}
