import * as url from 'url';

export interface RecipeModel {
  description: string;
  image: url;
  ingredients: string[];
}
