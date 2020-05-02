import {Injectable} from '@angular/core';
import {RecipeModel} from '../recipe/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeList: RecipeModel[] = [{
        id: 1,
        description: 'espaguetis',
        ingredients: ['pasta', 'tomate', 'carne'],
        image: 'https://www.divinacocina.es/wp-content/uploads/espaguetis-arrabiata.jpg'
    }, {
        id: 2,
        description: 'filete',
        ingredients: ['carne', 'roquefort'],
        image: 'https://s1.eestatic.com/2015/02/12/cocinillas/Cocinillas_10508984_115803729_1706x960.jpg'
    }];

    constructor() {
    }

    public obtenerPlatos(): RecipeModel[] {
        return this.recipeList;
    }

    public obtenerPlato(recipeId): RecipeModel {
        return this.recipeList.find(r => r.id === recipeId);
    }
}
