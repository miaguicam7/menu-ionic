import * as url from 'url';

export interface RecipeModel {
    id: number;
    description: string;
    image: url;
    ingredients: string[];
}
