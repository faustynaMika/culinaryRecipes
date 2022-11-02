import {Level} from "./enum/level";
import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {Tag} from "./tag";

export class Recipe {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
  level: Level;
  prepareTime: number;
  imageUrl?: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: Tag[];

  constructor(id: string, name: string, description: string, createDate: Date, level: Level, prepareTime: number, imageUrl: string, ingredients: Ingredient[], steps: Step[], tags: Tag[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = createDate;
    this.level = level;
    this.prepareTime = prepareTime;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.tags = tags;
  }
}
