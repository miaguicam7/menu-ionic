import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {RecipeModel} from '../recipe/recipe.model';
import {RecipeService} from '../services/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeResolver implements Resolve<RecipeModel> {

    constructor(private recipeservice: RecipeService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.recipeservice.obtenerPlato(Number(route.paramMap.get('recipeId')));
    }
}
