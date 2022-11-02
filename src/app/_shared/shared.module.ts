import {NgModule} from '@angular/core';
import {TextInputComponent} from "./component/text-input/text-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NumberInputComponent } from './component/number-input/number-input.component';
import {RecipeCardComponent} from "./component/recipe-card/recipe-card.component";
import {DatePipe} from "@angular/common";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [TextInputComponent, NumberInputComponent, RecipeCardComponent],
    imports: [
        ReactiveFormsModule,
        DatePipe,
        RouterLinkWithHref
    ],
  exports: [TextInputComponent, NumberInputComponent, RecipeCardComponent]
})
export class SharedModule {
}
