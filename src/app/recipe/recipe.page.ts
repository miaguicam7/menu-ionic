import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.page.html',
    styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
    recipeList: RecipeModel[] = [{
        description: 'espaguetis',
        ingredients: ['pasta', 'tomate', 'carne'],
        image: 'https://www.divinacocina.es/wp-content/uploads/espaguetis-arrabiata.jpg'
    }, {
        description: 'filete',
        ingredients: ['carne', 'roquefort'],
        image: 'https://s1.eestatic.com/2015/02/12/cocinillas/Cocinillas_10508984_115803729_1706x960.jpg'
    }];

    constructor() {
    }

    ngOnInit() {

    }
}
