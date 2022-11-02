import {Injectable} from '@angular/core';
import {Recipe} from "../../recipe/model/recipe";
import {SupabaseService} from "./supabase.service";
import {SupabaseClient} from "@supabase/supabase-js";
import {Ingredient} from "../../recipe/model/ingredient";
import {Step} from "../../recipe/model/step";
import {Tag} from "../../recipe/model/tag";
import {IngredientsDictionary} from "../../recipe/model/ingredientsDictionary";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private supabase: SupabaseClient;

  constructor(supabase: SupabaseService) {
    this.supabase = supabase.supabase;
  }

  async addImage(file: File): Promise<any> {
    const {data} = await this.supabase.storage
      .from("recipe-storage")
      .upload(Date.now().toString(), file);

    return data;
  }

  async addRecipe(recipe: Recipe, file: File) {

    console.log(recipe)
    console.log('plik' + file)

    const {data} = await this.supabase.from('recipe')
      .insert({
        name: recipe.name,
        description: recipe.description,
        created_at: '2020-01-01',
        level: recipe.level,
        prepareTime: recipe.prepareTime
      }).select('id');

    var recipeId = data?.at(0)?.id

    let image = await this.addImage(file)

    await this.supabase
      .from('recipe')
      .update({imageUrl: image.path})
      .eq('id', recipeId)

    recipe.ingredients.forEach(
      ingredient => this.addIngredient(ingredient, recipeId)
    )

    let number = 1;
    recipe.steps.forEach(
      step => {
        this.addStep(step, number, recipeId)
        number++;
      }
    )

    recipe.tags.forEach(
      tag => this.addTag(tag, recipeId)
    )
  }

  async get(id:number): Promise<Recipe | null> {
    const {data} = await this.supabase.from('recipe')
      .select('*,ingredients:ingredients(*),steps:steps(*),tags:tags(*)')
      .eq('id', id)
      .order("stepNumber", { foreignTable: "steps", ascending: true })
      .single();
    return data
  }

  async getAll(): Promise<Recipe[] | null> {
    const {data} = await this.supabase.from('recipe')
      .select('*');
    return data
  }

  async getFavourites(): Promise<Recipe[] | null> {
    const {data} = await this.supabase.from('recipe')
      .select('*')
      .eq('rate', 5)
    return data
  }

  async addStep(step: Step, number:number, recipeId: number) {
    await this.supabase.from('steps')
      .insert({
        description: step.description,
        stepNumber: number,
        recipeId: recipeId
      });
  }

  async addTag(tag: Tag, recipeId: number) {
    const {data} = await this.supabase.from('tags')
      .insert({
        name: tag.name
      })
      .select('id');

    let tagId = data?.at(0)?.id

    await this.supabase.from('recipeTags')
      .insert({
        recipeId: recipeId,
        tagId: tagId
      });
  }

  async addIngredient(ingredient: Ingredient, recipeId: number) {
    await this.supabase.from('ingredients')
      .insert({
        name: ingredient.name,
        capacity: ingredient.capacity,
        capacityType: ingredient.capacityType,
        recipeId: recipeId
      });
  }

  async search(name: string): Promise<IngredientsDictionary[] | null> {
    const { data } = await this.supabase.from('ingredientDictionary')
      .select('*')
      .like('name', '%' + name + '%')

      return data;
  }
}
