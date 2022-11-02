import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {Level} from "../../model/enum/level";
import {CapacityType} from "../../model/enum/capacity-type";
import {RecipeService} from "../../../_shared/service/recipe.service";
import {IngredientsDictionary} from "../../model/ingredientsDictionary";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class AddRecipeComponent implements OnInit {
  prepareForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(1500)]),
      level: new FormControl('EASY'),
      prepareTime: new FormControl(30),
      image: new FormControl(''),
      imageSource: new FormControl(''),
      tags: new FormArray([]),
      ingredients: new FormArray([this.defaultIngredients]),
      steps: new FormArray([this.defaultSteps])
    }
  )
  form: FormGroup = this.prepareForm

  levelOperator = Level
  capacityTypeOperator = CapacityType
  ingredientsAutocomplete: IngredientsDictionary[] | null = [];
  private service: RecipeService;

  constructor(service: RecipeService, private _snackBar: MatSnackBar) {
    this.service = service;
  }

  get defaultIngredients(): FormGroup {
    return new FormGroup({
        name: new FormControl(''),
        capacity: new FormControl(0),
        capacityType: new FormControl(CapacityType.DAG),
      }
    );
  }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  get defaultSteps(): FormGroup {
    return new FormGroup({
        description: new FormControl(''),
      }
    );
  }

  get steps(): FormArray {
    return this.form.get('steps') as FormArray;
  }

  resetForm() {
    this.form.reset()

    this.ingredients.clear()
    this.ingredients.push(this.defaultIngredients)

    this.steps.clear()
    this.steps.push(this.defaultSteps)
  }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredients.push(new FormGroup({
      name: new FormControl('',[Validators.required]),
      capacity: new FormControl(0),
      capacityType: new FormControl(CapacityType.G),
    }))
  }

  addStep() {
    this.steps.push(new FormGroup({
      description: new FormControl(''),
    }))
  }

  addTag(tag: string) {
    this.tags.push(new FormGroup({
      name: new FormControl(tag),
    }))
  }

  deleteTag(index: number) {
    this.tags.removeAt(index);
  }

  deleteIngredience(index: number) {
    this.ingredients.removeAt(index);
  }

  deleteStep(index: number) {
    this.steps.removeAt(index);
  }


  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.form.patchValue({
        imageSource: file
      });
    }
  }

  onSubmit() {
    this.service.addRecipe(
      this.form.value,
      this.form.get('imageSource')?.value
    )
    this.resetForm()
    this._snackBar.open('ZAPISANO PRZEPIS', 'X',{
      duration: 5000
    });
  }

  loadIngredients(value: string) {
    if (value.length <= 3) {
      return;
    }

    this.service.search(value).then(val => this.ingredientsAutocomplete = val)
  }
}
